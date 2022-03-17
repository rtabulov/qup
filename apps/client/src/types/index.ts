export interface Department {
  id: string;
  name: string;
}

export interface User {
  id: string;
  role: 'teacher' | 'admin';
  firstName: string;
  lastName: string;
  middleName: string;
  position: string | null;
  email: string;
}

export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  middleName: string;
  department: string;
  position: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}
