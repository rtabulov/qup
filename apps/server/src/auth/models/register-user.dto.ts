export class RegisterUserDto {
  confirmationPassword: string;
  role = 'user';

  fistName: string;
  lastName: string;
  middleName: string;
  department: string;
  position: string;
  email: string;
  password: string;
}
