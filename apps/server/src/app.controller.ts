import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin.guard';

import { LoggedInGuard } from './logged-in.guard';

@Controller()
export class AppController {
  constructor() {}

  // @Get()
  // publicRoute() {
  //   return 'This message is public to all!';
  // }

  // @UseGuards(LoggedInGuard)
  // @Get('protected')
  // guardedRoute() {
  //   return 'You can only see this if you are authenticated';
  // }

  // @UseGuards(AdminGuard)
  // @Get('admin')
  // getAdminMessage() {
  //   return 'You can only see this if you are an admin';
  // }
}
