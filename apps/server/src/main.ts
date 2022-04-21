import { Logger, NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import supertokens from 'supertokens-node';
import { SupertokensExceptionFilter } from './auth/auth.filter';
import * as fs from 'fs';

import { PrismaService } from './prisma/prisma.service';
import { AppModule } from './app.module';
import winstonLogger from './winston-logger';
import { ValidationPipe } from './validation.pipe';

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

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
    logger: winstonLogger,
  });
  app.setGlobalPrefix('api');
  const logger = app.get(Logger);
  const PORT = configService.get('PORT') || 3000;

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['http://localhost:4000'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensExceptionFilter());
  await app.listen(PORT);

  logger.log(`Application listening at ${await app.getUrl()}`);
};

bootstrap();
