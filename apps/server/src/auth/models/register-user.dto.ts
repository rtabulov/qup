import { IsEmail, IsString, MinLength, IsUUID } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  middleName: string;

  @IsUUID()
  departmentId: string;

  @IsString()
  position: string;

  @IsEmail()
  @MinLength(6)
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  confirmationPassword: string;
}
