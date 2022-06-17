import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { User, Role, Prisma } from '@prisma/client';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { resolveAuthLevel } from '../utils';
import { PrismaService } from '../prisma';
import { genereateReport } from '../utils/generateReport';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class CertificatesService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  create(certificate: CreateCertificateDto & { teacherId: string }) {
    return this.prismaService.certificate.create({ data: { ...certificate } });
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
    const certificates = await this.findApproved();
    const host =
      this.configService.get('HOST') ||
      `http://localhost:${this.configService.get('PORT')}`;
    return genereateReport(certificates, host);
  }
  findOne(id: string, { expand = false } = {}) {
    try {
      return this.prismaService.certificate.findUnique({
        where: { id },
        include: { teacher: expand, files: expand },
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
