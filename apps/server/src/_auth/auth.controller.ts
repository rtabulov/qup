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
import { AllowRoles } from '../roles.guard';
import { UpdateUserDto } from './models/update-user.dto';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly logger: Logger,
  ) {}

  @UseGuards(AllowRoles('admin'))
  @Get('users')
  findUsers() {
    return this.authService.findUsers();
  }

  @UseGuards(AllowRoles('admin'))
  @Get('users/inactive')
  findInactiveUsers() {
    return this.authService.findInactiveUsers();
  }

  @UseGuards(AllowRoles('admin'))
  @Delete('users/:id')
  removeUser(@Param('id') id: string) {
    return this.authService.removeUser(id);
  }

  @UseGuards(AllowRoles('admin'))
  @Patch('users/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.updateUser(id, updateUserDto);
  }

  @Get('teachers')
  findTeachers() {
    return this.authService.findTeachers();
  }

  @Get('self')
  getProfile(@Req() req) {
    if (!req.user) {
      return JSON.stringify(null);
    }

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

  @Get('roles')
  getRoles() {
    return this.authService.getRoles();
  }
}
