import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Error as STError } from 'supertokens-node';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Injectable()
export class LoggedInGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.switchToHttp();

    let err = undefined;
    const res = ctx.getResponse();
    const req = ctx.getRequest();

    // You can create an optional version of this by passing {sessionRequired: false} to verifySession
    await verifySession()(req, res, (res) => {
      err = res;
    });

    if (res.headersSent) {
      throw new STError({
        message: 'RESPONSE_SENT',
        type: 'RESPONSE_SENT',
      });
    }

    if (err) {
      throw err;
    }

    return true;
  }
}

export function AllowRoles(...allowedRoles: string[]) {
  return class RolesGuard extends LoggedInGuard {
    async canActivate(context: ExecutionContext) {
      const suResult = await super.canActivate(context);

      const req = context.switchToHttp().getRequest();
      const paylaod = (req.session as SessionContainer).getAccessTokenPayload();

      return suResult && allowedRoles.includes(paylaod.roleKey);
    }
  };
}
