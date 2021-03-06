import { Module } from '@nestjs/common';
import * as Redis from 'redis';
import { ConfigService } from '@nestjs/config';

import { REDIS } from './redis.constants';

@Module({
  providers: [
    {
      inject: [ConfigService],
      provide: REDIS,
      useFactory(configService: ConfigService) {
        return Redis.createClient({
          url: configService.get('REDIS_URL'),
          port: configService.get('REDIS_PORT'),
          host: configService.get('REDIS_HOST'),
          password: configService.get('REDIS_PASSWORD'),
        });
      },
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
