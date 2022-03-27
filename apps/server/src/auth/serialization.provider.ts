import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { User, Role } from '@prisma/client';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }
  serializeUser(
    user: User & { role: Role },
    done: (err: Error, user: { id: string; role: string }) => void,
  ) {
    done(null, { id: user.id, role: user.role.key });
  }

  async deserializeUser(
    payload: { id: string; role: string },
    done: (err: Error, user: any) => void,
  ) {
    try {
      const user = await this.authService.findById(payload.id, {
        expand: true,
      });
      done(null, user);
    } catch (e) {
      done(null, null);
    }
  }
}

type Unpromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
