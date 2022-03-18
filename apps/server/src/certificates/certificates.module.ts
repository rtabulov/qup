import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import * as crypto from 'crypto';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { ConfigService } from '@nestjs/config';

import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { Certificate } from './entities/certificate.entity';
import { FileMetaModule } from '../file-meta/file-meta.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    FileMetaModule,
    TypeOrmModule.forFeature([Certificate]),
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
      const hash = shortHash(await streamToString(file.stream));
      cb(null, a.name + '.' + hash + a.ext);
    },
  });
}

function streamToString(
  stream: Express.Multer.File['stream'],
): Promise<string> {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
  });
}

function shortHash(contents: string): string {
  const hashSum = crypto.createHash('sha256');
  hashSum.update(contents);
  return hashSum.digest('hex').slice(-8);
}
