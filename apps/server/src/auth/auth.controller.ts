import {
  Controller,
  Post,
  UseGuards,
  Body,
  Req,
  Logger,
  Get,
} from '@nestjs/common';

import { LocalGuard } from '../local.guard';
import { AuthService } from './auth.service';
import { LoginUserDto } from './models/login-user.dto';
import { RegisterUserDto } from './models/register-user.dto';
import { LoggedInGuard } from '../logged-in.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly logger: Logger,
  ) {}

  @Get('teachers')
  findAll() {
    return this.authService.findTeachers();
  }

  @UseGuards(LoggedInGuard)
  @Get('self')
  getProfile(@Req() req) {
    return this.authService.findById(req.user.id, { expand: true });
  }

  @Post('register')
  registerUser(@Body() user: RegisterUserDto) {
    return this.authService.registerUser(user);
  }

  @UseGuards(LocalGuard)
  @Post('login')
  loginUser(@Req() req, @Body() user: LoginUserDto) {
    return req.session;
  }

  @UseGuards(LoggedInGuard)
  @Post('logout')
  logoutUser(@Req() req) {
    return req.logout();
  }
}
