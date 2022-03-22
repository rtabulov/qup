import { ExecutionContext, Injectable } from '@nestjs/common';

import { LoggedInGuard } from './logged-in.guard';
import { User } from './auth/models/user.entity';

@Injectable()
export class HrGuard extends LoggedInGuard {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const allowedRoles: Array<User['role']> = ['hr', 'departmentHead', 'admin'];
    return (
      super.canActivate(context) &&
      allowedRoles.includes(req.session.passport.user.role)
    );
  }
}
