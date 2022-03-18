import { Type } from 'class-transformer';

export class CreateCertificateDto {
  name: string;

  issuedBy: string;

  @Type(() => Date)
  issuedDate: Date;

  @Type(() => Date)
  startDate: Date;

  @Type(() => Date)
  endDate: Date;

  files: any;
}
