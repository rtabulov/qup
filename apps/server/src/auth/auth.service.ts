import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
// @ts-ignore
import * as credential from 'credential';

import { LoginUserDto } from './models/login-user.dto';
import { RegisterUserDto } from './models/register-user.dto';
import { UpdateUserDto } from './models/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async validateUser(user: LoginUserDto) {
    const foundUser = await this.prismaService.user.findUnique({
      where: { email: user.email },
      include: { role: true },
    });

    if (!foundUser || !(await verify(foundUser.password, user.password))) {
      throw new UnauthorizedException({
        password: 'Неверный пароль',
      });
    }
    const { password: _password, ...restUser } = foundUser;
    return restUser;
  }

  async registerUser(user: RegisterUserDto) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: user.email },
      include: { certificates: true, department: true },
    });

    if (existingUser) {
      throw new BadRequestException({
        email: "Пользователь с таким e-mail'ом уже зарегистрирован",
      });
    }

    if (user.password !== user.confirmationPassword) {
      throw new BadRequestException({
        confirmationPassword: 'Password and Confirmation Password must match',
      });
    }
    const created = await this.prismaService.user.create({
      data: { ...user, role: { connect: { key: 'teacher' } } },
    });
    return this.prismaService.user.findUnique({
      where: { id: created.id },
      include: { certificates: true, department: true, role: true },
    });
  }

  async findTeachers() {
    return this.prismaService.user.findMany({
      where: { role: { key: 'teacher' } },
      include: { department: true },
    });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async findUsers() {
    return this.prismaService.user.findMany();
  }

  async removeUser(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }

  async findById(id: string, { expand = false } = {}) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      include: expand && {
        certificates: { include: { files: true } },
        role: true,
      },
    });
    if (!user) {
      throw new BadRequestException(`No user found with id ${id}`);
    }
    const { password, ...safe } = user;
    return safe;
  }
}

function verify(hash, pass) {
  return new Promise((resolve) => {
    credential().verify(hash, pass, (err, isValid) => resolve(isValid));
  });
}
