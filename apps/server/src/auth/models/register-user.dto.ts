import { User } from './user.entity';

export class RegisterUserDto {
  confirmationPassword: string;
  role?: User['role'];

  firstName: string;
  lastName: string;
  middleName: string;
  department: string;
  position: string;
  email: string;
  password: string;
}
