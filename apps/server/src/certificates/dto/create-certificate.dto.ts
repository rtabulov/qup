import { Type, Transform } from 'class-transformer';

export class CreateCertificateDto {
  name: string;

  issuedBy: string;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issuedDate: Date;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate: Date;

  files: any;
}
