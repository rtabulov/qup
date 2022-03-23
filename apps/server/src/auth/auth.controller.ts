import {
  Controller,
  Post,
  UseGuards,
  Req,
  Logger,
  Delete,
  Get,
  Param,
  Patch,
  Body,
} from '@nestjs/common';

import { LocalGuard } from '../local.guard';
import { AuthService } from './auth.service';
import { LoginUserDto } from './models/login-user.dto';
import { RegisterUserDto } from './models/register-user.dto';
import { LoggedInGuard } from '../logged-in.guard';
import { AdminGuard } from '../admin.guard';
import { UpdateUserDto } from './models/update-user.dto';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly logger: Logger,
  ) {}

  @UseGuards(AdminGuard)
  @Get('users')
  findUsers() {
    return this.authService.findUsers();
  }

  @UseGuards(AdminGuard)
  @Delete('users/:id')
  removeUser(@Param('id') id: string) {
    return this.authService.removeUser(id);
  }

  @UseGuards(AdminGuard)
  @Patch('users/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateUser(id, updateUserDto);
  }

  @Get('teachers')
  findTeachers() {
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