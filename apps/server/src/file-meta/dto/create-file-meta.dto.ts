import { Certificate } from '../../certificates/entities/certificate.entity';

export class CreateFileMetaDto {
  name: string;
  certificate?: Certificate;
}
