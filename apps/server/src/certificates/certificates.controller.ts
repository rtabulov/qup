import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Res,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import * as path from 'path';
import { FilesInterceptor } from '@nestjs/platform-express';
import { nanoid } from 'nanoid';

import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { CreateFileMetaDto } from '../file-meta/dto/create-file-meta.dto';
import { FileMetaService } from '../file-meta/file-meta.service';
import { LoggedInGuard } from '../logged-in.guard';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { AllowRoles } from '../roles.guard';
import { SupabaseService } from '../supabase';

@Controller('certificates')
export class CertificatesController {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly certificatesService: CertificatesService,
    private readonly fileMetaService: FileMetaService,
  ) {}

  @UseGuards(AllowRoles('teacher'))
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @Body() createCertificateDto: CreateCertificateDto,
    @UploadedFiles() uploadedFiles: Array<Express.Multer.File>,
    @Req() req,
  ) {
    const certificate = await this.certificatesService.create({
      ...createCertificateDto,
      teacherId: req.user.id,
    });

    const withUniqFilenames = uploadedFiles.map((f) => {
      const parsed = path.parse(f.originalname);
      const uniqFilename = `${parsed.name}.${nanoid(8)}${parsed.ext}`;
      return {
        ...f,
        uniqFilename,
      };
    });

    const supabaseFiles = await Promise.all(
      withUniqFilenames.map((f) =>
        this.supabaseService.storage
          .from('certificates')
          .upload(f.uniqFilename, f.buffer),
      ),
    );

    if (supabaseFiles.some((f) => f.error)) {
      throw supabaseFiles.find((f) => f.error);
    }

    const newFiles = withUniqFilenames.map<CreateFileMetaDto>((f) => ({
      name: f.uniqFilename,
      mimetype: f.mimetype,
      certificateId: certificate.id,
    }));

    await this.fileMetaService.createBatch(newFiles);

    return this.certificatesService.findOne(certificate.id);
  }

  @UseGuards(AllowRoles('hr', 'departmentHead'))
  @Get()
  findApproved() {
    return this.certificatesService.findApproved();
  }

  @UseGuards(AllowRoles('hr', 'departmentHead'))
  @Get('awaiting-approval')
  findAwaitingApproval() {
    return this.certificatesService.findAwaitingApproval();
  }

  @UseGuards(AllowRoles('hr', 'departmentHead'))
  @Get('report')
  async exportAll(@Res() res) {
    const workbook = await this.certificatesService.exportAll();
    var fileName = 'report.xlsx';
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
    workbook.xlsx.write(res).then(function () {
      res.end();
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(id, { expand: true });
  }

  @UseGuards(LoggedInGuard)
  @Patch(':id')
  @UseInterceptors(FilesInterceptor('files'))
  async update(
    @Param('id') id: string,
    @UploadedFiles() uploadedFiles: Array<Express.Multer.File>,
    @Body() updateCertificateDto: UpdateCertificateDto,
    @Req() req,
  ) {
    const certificate = await this.certificatesService.findOne(id);

    if (uploadedFiles) {
      const withUniqFilenames = uploadedFiles.map((f) => {
        const parsed = path.parse(f.originalname);
        const uniqFilename = `${parsed.name}.${nanoid(8)}${parsed.ext}`;
        return {
          ...f,
          uniqFilename,
        };
      });

      const supabaseFiles = await Promise.all(
        withUniqFilenames.map((f) =>
          this.supabaseService.storage
            .from('certificates')
            .upload(f.uniqFilename, f.buffer),
        ),
      );

      if (supabaseFiles.some((f) => f.error)) {
        throw supabaseFiles.find((f) => f.error);
      }

      const newFiles = withUniqFilenames.map<CreateFileMetaDto>((f) => ({
        name: f.uniqFilename,
        mimetype: f.mimetype,
        certificateId: certificate.id,
      }));

      await this.fileMetaService.createBatch(newFiles);
    }

    await this.certificatesService.update(id, req.user, updateCertificateDto);

    return certificate;
  }

  @UseGuards(LoggedInGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.certificatesService.remove(id, req.user);
  }
}
