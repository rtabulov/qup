import { Module } from '@nestjs/common';
import { FileMetaService } from './file-meta.service';
import { FileMetaController } from './file-meta.controller';
import { PrismaModule } from '../prisma';
import { SupabaseModule } from '../supabase';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [FileMetaController],
  providers: [FileMetaService],
  exports: [FileMetaService],
})
export class FileMetaModule {}
