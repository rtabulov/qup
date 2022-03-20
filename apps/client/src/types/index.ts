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

  certificates: Certificate[];
}

export interface Certificate {
  id: string;
  name: string;
  issuedBy: string;
  issuedDate: Date;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  files: FileMeta[];
}

export interface CreateCertificateDto {
  name: string;
  issuedBy: string;
  issuedDate: string;
  startDate: string;
  endDate: string;
  files: any;
}

export interface FileMeta {
  id: string;
  name: string;
  createdAt: Date;
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

export interface AppNotification {
  id: string;
  text: string;
  type: 'default' | 'danger' | 'warning' | 'success';
}
