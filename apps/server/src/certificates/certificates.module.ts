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

@Module({
  imports: [
    FileMetaModule,
    PrismaModule,
    MulterModule.registerAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          storage: makeStorage(configService.get('CERTIFICATE_UPLOAD_DIR')),
        };
      },
    }),
  ],
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {}

function makeStorage(pubDir: string) {
  return diskStorage({
    destination: function (req, file, cb) {
      const p = path.join(process.cwd(), pubDir);
      fs.mkdirSync(p, { recursive: true });
      cb(null, p);
    },
    filename: async function (req, file, cb) {
      const a = path.parse(file.originalname);
      const id = nanoid(8);
      cb(null, a.name + '.' + id + a.ext);
    },
  });
}
