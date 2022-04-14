import { NotFoundException, Controller, Get, Param, Res } from '@nestjs/common';
import { SupabaseService } from '../supabase';
import { FileMetaService } from './file-meta.service';
import { Response } from 'express';

@Controller('uploads')
export class FileMetaController {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly fileMetaService: FileMetaService,
  ) {}

  @Get('certificates/:id')
  async findCertificateFile(@Param('id') id: string, @Res() res: Response) {
    let file: Awaited<ReturnType<typeof this.fileMetaService.findOne>>;
    try {
      file = await this.fileMetaService.findOne(id);
    } catch {
      throw new NotFoundException();
    }

    const { data, error } = await this.supabaseService.storage
      .from('certificates')
      .download(file.name);

    if (error) {
      throw new NotFoundException();
    }

    const buf = await data.arrayBuffer();

    res.set('Content-Disposition', `inline; filename="${file.name}"`);
    res.type(file.mimetype);

    res.send(Buffer.from(buf));
  }
}
