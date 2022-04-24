import {
  MiddlewareConsumer,
  Module,
  NestModule,
  DynamicModule,
} from '@nestjs/common';

import { ConfigInjectionToken, AuthModuleConfig } from './config.interface';
import { PrismaService } from '../prisma';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from './auth.middleware';
import { ProfileService } from './profile.service';
import { SupertokensService } from './supertokens/supertokens.service';

@Module({
  providers: [SupertokensService, ProfileService, PrismaService],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }

  static forRoot({
    connectionURI,
    apiKey,
    appInfo,
  }: AuthModuleConfig): DynamicModule {
    return {
      providers: [
        {
          useValue: {
            appInfo,
            connectionURI,
            apiKey,
          },
          provide: ConfigInjectionToken,
        },
      ],
      exports: [],
      imports: [],
      module: AuthModule,
    };
  }
}
