import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { groupBy, mapValues, omit } from 'lodash';
import * as ExcelJS from 'exceljs';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { Certificate } from './entities/certificate.entity';
import { FileMeta } from '../file-meta/entities/file-meta.entity';
import { SafeUser } from '../auth/models/user.entity';
import { ConfigService } from '@nestjs/config';

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

  async exportAll() {
    const certificates = (
      await this.certificateRepository.find({
        relations: ['teacher', 'files', 'teacher.department'],
      })
    ).map((c) => ({
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
          certificates.map((cert) => ({
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
    const relations = expand ? ['teacher'] : undefined;
    return this.certificateRepository.findOne(id, { relations });
  }

  update(id: string, updateCertificateDto: UpdateCertificateDto) {
    return `This action updates a #${id} certificate`;
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

const autoHeight = (worksheet: ExcelJS.Worksheet) => {
  const lineHeight = 12; // height per line is roughly 12
  worksheet.eachRow((row) => {
    let maxLine = 1;
    row.eachCell((cell) => {
      if (typeof cell.value === 'string') {
        maxLine = Math.max(cell.value.split('\n').length - 1, maxLine);
      }
    });
    row.height = lineHeight * maxLine;
  });
};
