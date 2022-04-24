import { Controller, Get, Inject, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { Session } from './session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { ProfileService } from './profile.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('self')
  async getSelf(@Session() session: SessionContainer, @Res() res: Response) {
    if (!session) {
      return res.setHeader('Content-Type', 'application/json').send('null');
    }

    const userId = session.getUserId();
    return this.profileService.getProfile(userId);
  }

  @Get('roles')
  getRoles() {
    return this.profileService.getRoles();
  }
}
