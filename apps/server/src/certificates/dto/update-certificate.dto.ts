import { PartialType } from '@nestjs/mapped-types';
import { CreateCertificateDto } from './create-certificate.dto';

export class UpdateCertificateDto extends PartialType(CreateCertificateDto) {
  approved?: boolean;
  awaitingApproval?: boolean;
  comment?: string;
}
