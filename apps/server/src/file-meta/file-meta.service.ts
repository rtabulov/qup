import { Injectable } from '@nestjs/common';
import { CreateFileMetaDto } from './dto/create-file-meta.dto';
import { UpdateFileMetaDto } from './dto/update-file-meta.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FileMeta } from './entities/file-meta.entity';

@Injectable()
export class FileMetaService {
  constructor(
    @InjectRepository(FileMeta)
    private readonly fileMetaRepository: Repository<FileMeta>,
  ) {}
  create(createFileMetaDto: CreateFileMetaDto) {
    return 'This action adds a new fileMeta';
  }

  async createBatch(files: CreateFileMetaDto[]) {
    return Promise.all(files.map((f) => this.fileMetaRepository.save(f)));
  }

  findAll() {
    return `This action returns all fileMeta`;
  }

  findOne(id: string) {
    return `This action returns a #${id} fileMeta`;
  }

  update(id: string, updateFileMetaDto: UpdateFileMetaDto) {
    return `This action updates a #${id} fileMeta`;
  }

  remove(id: string) {
    return `This action removes a #${id} fileMeta`;
  }
}
