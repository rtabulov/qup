import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { Session } from './session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Controller('auth')
export class AuthController {
  @Get('self')
  @UseGuards(AuthGuard)
  async getSelf(@Session() session: SessionContainer) {
    const data = await session.getSessionData();
    const payload = await session.getAccessTokenPayload();

    console.log({ data, payload });

    return { data, payload };
  }
}
