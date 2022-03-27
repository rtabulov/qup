import { ExecutionContext } from '@nestjs/common';

import { LoggedInGuard } from './logged-in.guard';

export function AllowRoles(...allowedRoles: string[]) {
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
