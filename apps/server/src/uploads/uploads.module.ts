import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UploadsController } from './uploads.controller';
import { SupabaseModule } from '../supabase';
import { FileMetaModule } from '../file-meta';

@Module({
  imports: [ConfigModule, SupabaseModule, FileMetaModule],
  controllers: [UploadsController],
})
export class UploadsModule {}
