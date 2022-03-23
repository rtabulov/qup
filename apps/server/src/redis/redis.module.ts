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
        return {
          useValue: Redis.createClient({
            port: 6379,
            host: configService.get('REDIS_HOST'),
          }),
        };
      },
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
