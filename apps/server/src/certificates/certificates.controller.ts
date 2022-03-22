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
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateFileMetaDto } from '../file-meta/dto/create-file-meta.dto';
import { FileMetaService } from '../file-meta/file-meta.service';
import { LoggedInGuard } from '../logged-in.guard';
import { AdminGuard } from '../admin.guard';
import { DepartmentHeadGuard } from '../department-head.guard';
import { HrGuard } from '../hr.guard';

@Controller('certificates')
export class CertificatesController {
  constructor(
    private readonly certificatesService: CertificatesService,
    private readonly fileMetaService: FileMetaService,
  ) {}

  @UseGuards(LoggedInGuard)
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @Body() createCertificateDto: CreateCertificateDto,
    @UploadedFiles() uploadedFiles: Array<Express.Multer.File>,
    @Req() req,
  ) {
    const newFiles = uploadedFiles.map<CreateFileMetaDto>((f) => ({
      name: f.filename,
    }));
    const files = await this.fileMetaService.createBatch(newFiles);

    return this.certificatesService.create({
      ...createCertificateDto,
      teacher: req.user,
      files,
    });
  }

  @UseGuards(HrGuard)
  @Get()
  findAll() {
    return this.certificatesService.findAll();
  }

  @UseGuards(HrGuard)
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
    return this.certificatesService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCertificateDto: UpdateCertificateDto,
  // ) {
  //   return this.certificatesService.update(id, updateCertificateDto);
  // }

  @UseGuards(LoggedInGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.certificatesService.remove(id, req.user);
  }
}
