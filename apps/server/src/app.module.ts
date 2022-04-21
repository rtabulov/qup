import {
  Inject,
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import * as RedisStore from 'connect-redis';
// import * as session from 'express-session';
// import * as passport from 'passport';
// import { RedisClient } from 'redis';
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
    AuthModule.forRoot({
      // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI: 'http://localhost:3567',
      // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: 'qup',
        apiDomain: 'http://localhost:3000',
        websiteDomain: 'http://localhost:4000',
        apiBasePath: '/api/auth',
        websiteBasePath: '/auth',
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local'],
    }),
    DepartmentsModule,
    RedisModule,
    CertificatesModule,
    FileMetaModule,
  ],
  controllers: [AppController],
  providers: [Logger],
})
export class AppModule {
  //  implements NestModule
  // constructor(
  //   @Inject(REDIS) private readonly redis: RedisClient,
  //   private readonly configService: ConfigService,
  // ) {}
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(
  //       session({
  //         store: new (RedisStore(session))({
  //           client: this.redis,
  //           logErrors: true,
  //         }),
  //         saveUninitialized: false,
  //         secret: this.configService.get('SESSION_SECRET'),
  //         resave: false,
  //         rolling: true,
  //         name: this.configService.get('SESSION_NAME'),
  //         cookie: {
  //           sameSite: true,
  //           httpOnly: true,
  //           maxAge: 30 * 60 * 1000,
  //           secure: this.configService.get('SESSION_SECURE') === 'true',
  //         },
  //       }),
  //       passport.initialize(),
  //       passport.session(),
  //     )
  //     .forRoutes('*');
  // }
}
