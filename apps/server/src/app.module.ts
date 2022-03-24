import {
  Inject,
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as RedisStore from 'connect-redis';
import * as session from 'express-session';
import * as passport from 'passport';
import { RedisClient } from 'redis';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { DepartmentsModule } from './departments/departments.module';
import { AuthModule } from './auth/auth.module';
import { REDIS } from './redis/redis.constants';
import { RedisModule } from './redis/redis.module';
import { CertificatesModule } from './certificates/certificates.module';
import { FileMetaModule } from './file-meta/file-meta.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          host: configService.get('DB_HOST'),
          port: 5432,
          username: 'postgres',
          password: 'example',
          database: 'test',
          type: 'postgres',
          autoLoadEntities: true,
          // synchronize: process.env.NODE_ENV !== 'production',
          synchronize: true,
          url: configService.get('DATABASE_URL'),
          ssl: configService.get('DATABASE_URL')
            ? { rejectUnauthorized: false }
            : false,
        };
      },
    }),
    DepartmentsModule,
    AuthModule,
    RedisModule,
    CertificatesModule,
    FileMetaModule,
  ],
  controllers: [AppController],
  providers: [Logger],
})
export class AppModule implements NestModule {
  constructor(
    @Inject(REDIS) private readonly redis: RedisClient,
    private readonly configService: ConfigService,
  ) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new (RedisStore(session))({
            client: this.redis,
            logErrors: true,
          }),
          saveUninitialized: false,
          secret: this.configService.get('SESSION_SECRET'),
          resave: false,
          rolling: true,
          name: this.configService.get('SESSION_NAME'),
          cookie: {
            sameSite: true,
            httpOnly: true,
            maxAge: 30 * 60 * 1000,
            secure: this.configService.get('SESSION_SECURE') === 'true',
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
