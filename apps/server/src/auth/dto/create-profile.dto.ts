import { IsString, IsUUID, IsEmail } from 'class-validator';

export class CreateProfileDto {
  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  middleName: string;

  @IsString()
  position: string;

  @IsUUID()
  userId: string;

  @IsUUID()
  departmentId: string;
}
