import type {
  Department as DepartmentPrisma,
  Role as RolePrisma,
  User as UserPrisma,
  FileMeta as FileMetaPrisma,
  Certificate as CertificatePrisma,
} from '@prisma/client';

export const ROLES_ARRAY = [
  'teacher',
  'hr',
  'departmentHead',
  'admin',
] as const;

export type Role = RolePrisma;

export type Department = DepartmentPrisma;

export type FileMeta = FileMetaPrisma;

export interface Certificate extends CertificatePrisma {
  files?: FileMeta[];
  teacher?: User;
}

export interface User extends UserPrisma {
  role?: Role;
  certificates?: Certificate[];
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

export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  middleName: string;
  departmentId: string;
  position: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

export interface UpdateUserDto {
  roleId?: string;
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
