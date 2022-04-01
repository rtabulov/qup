import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { ConfigService } from '@nestjs/config';
import { nanoid } from 'nanoid';

import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { FileMetaModule } from '../file-meta/file-meta.module';
import { PrismaModule } from '../prisma';
import { SupabaseModule } from '../supabase';

@Module({
  imports: [
    FileMetaModule,
    PrismaModule,
    SupabaseModule,
    MulterModule.register(),
  ],
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {}
