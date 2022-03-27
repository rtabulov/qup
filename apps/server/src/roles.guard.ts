import { ExecutionContext } from '@nestjs/common';

import { LoggedInGuard } from './logged-in.guard';
import { User } from './auth/models/user.entity';

export function AllowRoles(...allowedRoles: User['role'][]) {
  return class RolesGuard extends LoggedInGuard {
    canActivate(context: ExecutionContext): boolean {
      const req = context.switchToHttp().getRequest();
      return (
        super.canActivate(context) &&
        allowedRoles.includes(req.session.passport.user.role)
      );
    }
  };
}
