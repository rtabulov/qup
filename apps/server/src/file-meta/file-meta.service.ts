import { Injectable } from '@nestjs/common';
import { Certificate } from '@prisma/client';

import { CreateFileMetaDto } from './dto/create-file-meta.dto';
import { UpdateFileMetaDto } from './dto/update-file-meta.dto';
import { PrismaService } from '../prisma';

@Injectable()
export class FileMetaService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createFileMetaDto: CreateFileMetaDto) {
    return 'This action adds a new fileMeta';
  }

  async createBatch(files: CreateFileMetaDto[]) {
    return Promise.all(
      files.map((f) => this.prismaService.fileMeta.create({ data: f })),
    );
  }

  findAll() {
    return `This action returns all fileMeta`;
  }

  findOne(name: string) {
    return this.prismaService.fileMeta.findUnique({ where: { name } });
  }

  update(id: string, updateFileMetaDto: UpdateFileMetaDto) {
    return `This action updates a #${id} fileMeta`;
  }

  remove(id: string) {
    return `This action removes a #${id} fileMeta`;
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
