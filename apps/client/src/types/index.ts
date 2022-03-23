export interface Department {
  id: string;
  name: string;
}

export const ROLES_ARRAY = [
  'teacher',
  'hr',
  'departmentHead',
  'admin',
] as const;

type Role = typeof ROLES_ARRAY[number];

export interface User {
  id: string;
  role: Role;
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
  teacher?: User;

  approved: boolean;
  awaitingApproval: boolean;
  comment: string;
}

export interface CreateCertificateDto {
  name: string;
  issuedBy: string;
  issuedDate: string;
  startDate: string;
  endDate: string;
  files: any;
}

export interface UpdateCertificateDto extends Partial<CreateCertificateDto> {
  approved?: boolean;
  awaitingApproval?: boolean;
  comment?: string;
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

export interface UpdateUserDto {
  role?: User['role'];
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
