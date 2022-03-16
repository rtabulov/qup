import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentsRepository: Repository<Department>,
  ) {}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsRepository.save(createDepartmentDto);
  }

  findAll() {
    return this.departmentsRepository.find({ relations: ['teachers'] });
  }

  findOne(id: string) {
    return this.departmentsRepository.findOne(id);
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsRepository.update(id, updateDepartmentDto);
  }

  async remove(id: string) {
    const photoToRemove = await this.departmentsRepository.findOne(id);
    return this.departmentsRepository.remove(photoToRemove);
  }
}
