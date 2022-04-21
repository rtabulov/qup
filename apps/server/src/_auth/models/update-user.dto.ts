import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class UpdateUserDto {
  @IsUUID()
  @IsOptional()
  roleId?: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
