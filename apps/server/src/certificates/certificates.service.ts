import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { groupBy, sortBy } from 'lodash';
import * as ExcelJS from 'exceljs';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { ConfigService } from '@nestjs/config';
import { resolveAuthLevel } from '../utils';
import { PrismaService } from '../prisma';
import { FileMeta, User, Role, Prisma } from '@prisma/client';

@Injectable()
export class CertificatesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  create(
    certificate: CreateCertificateDto & {
      teacherId: string;
    },
  ) {
    return this.prismaService.certificate.create({
      data: { ...certificate },
    });
  }

  findAll() {
    return this.prismaService.certificate.findMany({
      include: { teacher: true, files: true },
    });
  }

  findApproved() {
    return this.prismaService.certificate.findMany({
      where: { approved: true },
      include: { teacher: { include: { department: true } }, files: true },
    });
  }

  findAwaitingApproval() {
    return this.prismaService.certificate.findMany({
      where: { approved: false, awaitingApproval: true },
      include: { teacher: true, files: true },
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
              .map((f) => `${host}/api/uploads/certificates/${f.name}`)
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
    try {
      return this.prismaService.certificate.findUnique({
        where: { id },
        include: {
          teacher: expand,
          files: expand,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientValidationError) {
        throw new NotFoundException();
      }
    }
  }

  async update(
    id: string,
    user: User & { role: Role },
    updateCertificateDto: UpdateCertificateDto,
  ) {
    const found = await this.findOne(id, { expand: true });
    if (!found) {
      throw new NotFoundException();
    }

    if (found.approved) {
      throw new BadRequestException();
    }

    if (
      found.teacher.id !== user.id &&
      !resolveAuthLevel(user.role.key, 'hr')
    ) {
      throw new ForbiddenException();
    }

    return this.prismaService.certificate.update({
      where: { id },
      data: {
        ...updateCertificateDto,
        awaitingApproval: updateCertificateDto.awaitingApproval ?? true,
      },
    });
  }

  async remove(id: string, requestUser: User) {
    const cert = await this.findOne(id, { expand: true });

    if (requestUser.id !== cert.teacher.id) {
      throw new UnauthorizedException();
    }

    if (cert.approved) {
      throw new UnauthorizedException();
    }

    return this.prismaService.certificate.delete({ where: { id } });
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
