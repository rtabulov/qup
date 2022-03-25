import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
// @ts-ignore
import * as credential from 'credential';
import { InjectRepository } from '@nestjs/typeorm';

import { User, SafeUser } from './models/user.entity';
import { LoginUserDto } from './models/login-user.dto';
import { RegisterUserDto } from './models/register-user.dto';
import { UpdateUserDto } from './models/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private prismaService: PrismaService,
  ) {}

  async validateUser(user: LoginUserDto) {
    const foundUser = await this.prismaService.user.findUnique({
      where: { email: user.email },
    });

    if (!foundUser || !(await verify(foundUser.password, user.password))) {
      throw new UnauthorizedException({
        password: 'Неверный пароль',
      });
    }
    const { password: _password, ...retUser } = foundUser;
    return retUser;
  }

  async registerUser(user: RegisterUserDto): Promise<SafeUser> {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: user.email },
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
    const created = await this.prismaService.user.create({ data: user });
    this.prismaService.user.findUnique({
      where: { id: created.id },
      include: { certificate: true, department: true },
    });
  }

  async findTeachers(): Promise<SafeUser[]> {
    return this.prismaService.user.find({
      where: { role: 'teacher' },
      relations: ['department'],
    });
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<SafeUser> {
    await this.prismaService.user.update({ id }, updateUserDto);
    return this.prismaService.user.findOne(id);
  }

  async findUsers(): Promise<SafeUser[]> {
    return this.prismaService.user.find();
  }

  async removeUser(id: string): Promise<SafeUser> {
    const found = await this.prismaService.user.findOne(id);
    return this.prismaService.user.remove(found);
  }

  async findById(id: string, { expand = false } = {}): Promise<SafeUser> {
    const relations = ['certificates', 'certificates.files'];

    const user = await this.prismaService.user.findOne({
      where: { id },
      relations: expand ? relations : undefined,
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
