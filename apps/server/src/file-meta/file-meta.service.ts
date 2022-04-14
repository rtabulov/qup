import { Injectable } from '@nestjs/common';
import { Certificate } from '@prisma/client';

import { CreateFileMetaDto } from './dto/create-file-meta.dto';
import { PrismaService } from '../prisma';

@Injectable()
export class FileMetaService {
  constructor(private readonly prismaService: PrismaService) {}

  async createBatch(files: CreateFileMetaDto[]) {
    return Promise.all(
      files.map((f) => this.prismaService.fileMeta.create({ data: f })),
    );
  }

  findOne(name: string) {
    return this.prismaService.fileMeta.findUnique({ where: { name } });
  }

  async findByCertificate(certificate: Certificate) {
    return this.prismaService.fileMeta.findMany({
      where: { certificateId: certificate.id },
    });
  }

  async removeByCertificate(certificate: Certificate) {
    return this.prismaService.fileMeta.deleteMany({
      where: { certificateId: certificate.id },
    });
  }
}
