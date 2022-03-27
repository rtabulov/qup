import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prisma';

@Injectable()
export class DepartmentsService {
  constructor(private prismaService: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.prismaService.department.create({ data: createDepartmentDto });
  }

  findAll() {
    return this.prismaService.department.findMany();
  }

  findOne(id: string) {
    return this.prismaService.department.findUnique({ where: { id } });
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prismaService.department.update({
      where: { id },
      data: updateDepartmentDto,
    });
  }

  async remove(id: string) {
    return this.prismaService.department.delete({ where: { id } });
  }
}
