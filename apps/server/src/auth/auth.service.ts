import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// @ts-ignore
import * as credential from 'credential';
import { TeachersService } from '../teachers/teachers.service';
import { Teacher } from '../teachers/entities/teacher.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: TeachersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Omit<ConstructorType<Teacher>, 'password'> | null> {
    const user = await this.usersService.findOne(email);

    if (!user) {
      return null;
    }

    const isValid = await verify(user.password, pass);
    if (!isValid) {
      return null;
    }

    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

function verify(hash, pass) {
  return new Promise((resolve) => {
    credential().verify(hash, pass, (err, isValid) => resolve(isValid));
  });
}

// helper types

// 1 Transform the type to flag all the undesired keys as 'never'
type FlagExcludedType<Base, Type> = {
  [Key in keyof Base]: Base[Key] extends Type ? never : Key;
};

// 2 Get the keys that are not flagged as 'never'
type AllowedNames<Base, Type> = FlagExcludedType<Base, Type>[keyof Base];

// 3 Use this with a simple Pick to get the right interface, excluding the undesired type
type OmitType<Base, Type> = Pick<Base, AllowedNames<Base, Type>>;

// 4 Exclude the Function type to only get properties
type ConstructorType<T> = OmitType<T, Function>;
