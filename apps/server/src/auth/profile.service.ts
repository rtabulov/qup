import { Injectable } from '@nestjs/common';
import { omit } from 'lodash';
import { Profile } from '@prisma/client';

import { PrismaService } from '../prisma';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProfile(profile: CreateProfileDto) {
    const created = await this.prismaService.profile.create({
      data: {
        ...omit(profile, 'departmentId'),
        active: false,
        role: { connect: { key: 'teacher' } },
        department: { connect: { id: profile.departmentId } },
      },
    });

    return this.prismaService.profile.findUnique({
      where: { id: created.id },
      include: { certificates: true, department: true, role: true },
    });
  }

  async getProfile(userId: string) {
    const res = await this.prismaService.profile.findUnique({
      where: { userId },
      include: { role: true },
    });

    return res;
  }

  async getUsers() {
    return this.prismaService.profile.findMany({
      where: { active: true },
      include: { role: true },
    });
  }

  async getInactiveUsers() {
    return this.prismaService.profile.findMany({
      where: { active: false },
      include: { role: true },
    });
  }

  async getRoles() {
    return this.prismaService.role.findMany();
  }
}
