import { PartialType } from '@nestjs/mapped-types';
import { CreateFileMetaDto } from './create-file-meta.dto';

export class UpdateFileMetaDto extends PartialType(CreateFileMetaDto) {}
