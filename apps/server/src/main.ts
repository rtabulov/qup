import { Logger, NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

import { PrismaService } from './prisma/prisma.service';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const configService = new ConfigService();

  let httpsOptions: NestApplicationOptions['httpsOptions'] | undefined;

  const cert = configService.get('SSL_CERTIFICATE_PATH');
  const key = configService.get('SSL_KEY_PATH');

  if (key && cert) {
    httpsOptions = {
      key: fs.readFileSync(key),
      cert: fs.readFileSync(cert),
    };
  }

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.setGlobalPrefix('api');
  const logger = app.get(Logger);
  const PORT = configService.get('PORT') || 3000;

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(PORT);

  logger.log(`Application listening at ${await app.getUrl()}`);
};

bootstrap();
