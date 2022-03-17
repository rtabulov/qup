import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { User, SafeUser } from './models/user.entity';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }
  serializeUser(
    user: User,
    done: (err: Error, user: { id: string; role: string }) => void,
  ) {
    done(null, { id: user.id, role: user.role });
  }

  async deserializeUser(
    payload: { id: string; role: string },
    done: (err: Error, user: SafeUser) => void,
  ) {
    const user = await this.authService.findById(payload.id);
    done(null, user);
  }
}
