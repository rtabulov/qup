import { PassportModule } from '@nestjs/passport';
import { Module, Logger } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthSerializer } from './serialization.provider';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma';

@Module({
  imports: [PrismaModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AuthSerializer, Logger],
  exports: [AuthService],
})
export class AuthModule {}
