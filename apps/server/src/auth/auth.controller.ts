import { Controller, Get, Inject, Res, UseGuards, Req } from '@nestjs/common';
import { LoggedInGuard, AllowRoles } from './auth.guard';
import { Session } from './session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { ProfileService } from './profile.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(LoggedInGuard)
  @Get('self')
  async getSelf(@Session() session: SessionContainer, @Res() res: Response) {
    if (!session) {
      return res.setHeader('Content-Type', 'application/json').send('null');
    }

    const userId = session.getUserId();
    const profile = await this.profileService.getProfile(userId);
    return res.send(profile);
  }

  @UseGuards(LoggedInGuard)
  @Get('users')
  async getUsers() {
    return this.profileService.getUsers();
  }

  @UseGuards(LoggedInGuard)
  @Get('users/inactive')
  async getInactiveUsers() {
    return this.profileService.getInactiveUsers();
  }

  @Get('roles')
  getRoles() {
    return this.profileService.getRoles();
  }
}
