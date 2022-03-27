import { ExecutionContext, Injectable } from '@nestjs/common';

import { LoggedInGuard } from './logged-in.guard';

@Injectable()
export class HrGuard extends LoggedInGuard {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const allowedRoles = ['hr', 'departmentHead', 'admin'];
    return (
      super.canActivate(context) &&
      allowedRoles.includes(req.session.passport.user.role)
    );
  }
}
