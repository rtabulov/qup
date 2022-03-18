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
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateFileMetaDto } from '../file-meta/dto/create-file-meta.dto';
import { FileMetaService } from '../file-meta/file-meta.service';
import { FileMeta } from '../file-meta/entities/file-meta.entity';
import { AuthService } from '../auth/auth.service';
import { LoggedInGuard } from '../logged-in.guard';

@Controller('certificates')
export class CertificatesController {
  constructor(
    private readonly certificatesService: CertificatesService,
    private readonly fileMetaService: FileMetaService,
    private readonly userService: AuthService,
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

    const teacher = await this.userService.findById(req.user.id);

    return this.certificatesService.create({
      ...createCertificateDto,
      teacher: req.user,
      files,
    });
  }

  @Get()
  findAll() {
    return this.certificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCertificateDto: UpdateCertificateDto,
  ) {
    return this.certificatesService.update(+id, updateCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatesService.remove(+id);
  }
}
