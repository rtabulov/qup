import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FileMetaService } from './file-meta.service';
import { CreateFileMetaDto } from './dto/create-file-meta.dto';
import { UpdateFileMetaDto } from './dto/update-file-meta.dto';

@Controller('file-meta')
export class FileMetaController {
  constructor(private readonly fileMetaService: FileMetaService) {}

  @Post()
  create(@Body() createFileMetaDto: CreateFileMetaDto) {
    return this.fileMetaService.create(createFileMetaDto);
  }

  @Get()
  findAll() {
    return this.fileMetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileMetaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFileMetaDto: UpdateFileMetaDto,
  ) {
    return this.fileMetaService.update(id, updateFileMetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileMetaService.remove(id);
  }
}
