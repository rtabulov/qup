import { Module } from '@nestjs/common';
import { FileMetaService } from './file-meta.service';
import { FileMetaController } from './file-meta.controller';
import { PrismaModule } from '../prisma';

@Module({
  imports: [PrismaModule],
  controllers: [FileMetaController],
  providers: [FileMetaService],
  exports: [FileMetaService],
})
export class FileMetaModule {}
