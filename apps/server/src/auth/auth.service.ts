import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
// @ts-ignore
import * as credential from 'credential';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User, SafeUser } from './models/user.entity';
import { LoginUserDto } from './models/login-user.dto';
import { RegisterUserDto } from './models/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async validateUser(user: LoginUserDto) {
    const foundUser = await this.usersRepository.findOne({ email: user.email });

    if (!user || !(await await verify(foundUser.password, user.password))) {
      throw new UnauthorizedException({
        password: 'Неверный пароль',
      });
    }
    const { password: _password, ...retUser } = foundUser;
    return retUser;
  }

  async registerUser(user: RegisterUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = await this.usersRepository.findOne({
      email: user.email,
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
    const created = this.usersRepository.create(user);
    return await this.usersRepository.save(created);
  }

  async findTeachers(): Promise<SafeUser[]> {
    return this.usersRepository.find({
      where: { role: 'teacher' },
      relations: ['department'],
    });
  }

  async findUsers(): Promise<SafeUser[]> {
    return this.usersRepository.find();
  }

  async removeUser(id: string): Promise<SafeUser> {
    const found = await this.usersRepository.findOne(id);
    return this.usersRepository.remove(found);
  }

  async findById(id: string, { expand = false } = {}): Promise<SafeUser> {
    const relations = ['certificates', 'certificates.files'];

    const user = await this.usersRepository.findOne({
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
