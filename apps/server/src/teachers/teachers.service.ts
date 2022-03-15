import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
  ) {}

  create(createTeacherDto: CreateTeacherDto) {
    return this.teachersRepository.save(createTeacherDto);
  }

  findAll() {
    return this.teachersRepository.find();
  }

  findOne(id: string) {
    return this.teachersRepository.findOne(id);
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return this.teachersRepository.update(id, updateTeacherDto);
  }

  async remove(id: string) {
    const photoToRemove = await this.teachersRepository.findOne(id);
    return this.teachersRepository.remove(photoToRemove);
  }
}
