import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { Certificate } from './entities/certificate.entity';
import { FileMeta } from '../file-meta/entities/file-meta.entity';
import { SafeUser } from '../auth/models/user.entity';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(Certificate)
    private readonly certificateRepository: Repository<Certificate>,
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
    return `This action returns all certificates`;
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
