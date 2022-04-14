import { Transform } from 'class-transformer';
import { IsString, IsDate } from 'class-validator';

export class CreateCertificateDto {
  @IsString()
  name: string;

  @IsString()
  issuedBy: string;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate()
  issuedDate: Date;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate()
  startDate: Date;

  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate()
  endDate: Date;

  files: any;
}
