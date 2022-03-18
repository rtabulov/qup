import { Module } from '@nestjs/common';
import { FileMetaService } from './file-meta.service';
import { FileMetaController } from './file-meta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileMeta } from './entities/file-meta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileMeta])],
  controllers: [FileMetaController],
  providers: [FileMetaService],
  exports: [FileMetaService],
})
export class FileMetaModule {}
