import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';

@Injectable()
export class DepartmentsService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.department.findMany();
  }

  findOne(id: string) {
    return this.prismaService.department.findUnique({ where: { id } });
  }
}
