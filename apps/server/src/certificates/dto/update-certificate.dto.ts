import { PartialType } from '@nestjs/mapped-types';
import { CreateCertificateDto } from './create-certificate.dto';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateCertificateDto extends PartialType(CreateCertificateDto) {
  @IsBoolean()
  @IsOptional()
  approved?: boolean;

  @IsBoolean()
  @IsOptional()
  awaitingApproval?: boolean;

  @IsString()
  @IsOptional()
  comment?: string;
}
