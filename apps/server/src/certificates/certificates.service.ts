import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { groupBy, sortBy } from 'lodash';
import * as ExcelJS from 'exceljs';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { Certificate } from './entities/certificate.entity';
import { FileMeta } from '../file-meta/entities/file-meta.entity';
import { SafeUser } from '../auth/models/user.entity';
import { ConfigService } from '@nestjs/config';
import { resolveAuthLevel } from '../utils';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
    private readonly configService: ConfigService,
  ) {}

  create(
    certificate: CreateCertificateDto & {
      teacher: SafeUser;
      files: FileMeta[];
    },
  ) {
    const cert = this.certificateRepository.create({
      ...certificate,
    });
    return this.certificateRepository.save(cert);
  }

  findAll() {
    return this.certificateRepository.find({ relations: ['teacher', 'files'] });
  }

  findApproved() {
    return this.certificateRepository.find({
      where: { approved: true },
      relations: ['teacher', 'files', 'teacher.department'],
    });
  }

  findAwaitingApproval() {
    return this.certificateRepository.find({
      where: { approved: false, awaitingApproval: true },
      relations: ['teacher', 'files'],
    });
  }

  async exportAll() {
    const certificates = (await this.findApproved()).map((c) => ({
      ...c,
      teacher: {
        ...c.teacher,
        fullName: `${c.teacher.lastName} ${c.teacher.firstName} ${c.teacher.middleName}`,
      },
    }));

    const groupedByDepartments = groupBy(
      certificates,
      'teacher.department.name',
    );

    const workbook = new ExcelJS.Workbook();
    const host = this.configService.get('HOST');

    Object.entries(groupedByDepartments).forEach(
      ([department, certificates]) => {
        const ws = workbook.addWorksheet(department);
        ws.columns = [
          // { header: 'ID', key: 'id' },
          { header: 'ФИО преподавателя', key: 'fullName' },
          { header: 'Название курса', key: 'name' },
          { header: 'Кем выдан', key: 'issuedBy' },
          { header: 'Дата выдачи', key: 'issuedDate' },
          { header: 'Дата начала обучения', key: 'startDate' },
          { header: 'Дата окончания обучения', key: 'endDate' },
          { header: 'Прикрепленные файлы', key: 'files' },
        ];
        ws.addRows(
          sortBy(certificates, 'teacher.fullName').map((cert) => ({
            // id: cert.id,
            fullName: cert.teacher.fullName,
            name: cert.name,
            issuedBy: cert.issuedBy,
            issuedDate: new Date(cert.issuedDate),
            startDate: new Date(cert.startDate),
            endDate: new Date(cert.endDate),
            files: cert.files
              .map((f) => `${host}/uploads/certificates/${f.name}`)
              .join('\n'),
          })),
        );

        // autoHeight(ws);
        autoWidth(ws);
      },
    );

    return workbook;
  }

  findOne(id: string, { expand = false } = {}) {
    const relations = expand ? ['teacher', 'files'] : undefined;
    return this.certificateRepository.findOne(id, { relations });
  }

  async update(
    id: string,
    user: Certificate['teacher'],
    updateCertificateDto: UpdateCertificateDto,
  ) {
    const found = await this.findOne(id, { expand: true });
    if (!found) {
      throw new NotFoundException();
    }

    if (found.approved) {
      throw new BadRequestException();
    }

    if (found.teacher.id !== user.id && !resolveAuthLevel(user.role, 'hr')) {
      throw new ForbiddenException();
    }

    return this.certificateRepository.update(id, {
      ...updateCertificateDto,
      awaitingApproval: updateCertificateDto.awaitingApproval ?? true,
    });
  }

  async remove(id: string, requestUser: Certificate['teacher']) {
    const cert = await this.findOne(id, { expand: true });

    if (requestUser.id !== cert.teacher.id) {
      throw new UnauthorizedException();
    }

    return this.certificateRepository.remove(cert);
  }
}

const autoWidth = (worksheet: ExcelJS.Worksheet, minimalWidth = 10) => {
  worksheet.columns.forEach((column) => {
    let maxColumnLength = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      maxColumnLength = Math.max(
        maxColumnLength,
        minimalWidth,
        cell.value
          ? cell.value instanceof Date
            ? 8
            : cell.value.toString().length
          : 0,
      );
    });
    column.width = maxColumnLength + 2;
  });
};
