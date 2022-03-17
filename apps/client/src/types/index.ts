export interface Department {
  id: string;
  name: string;
}

export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  department: Department;
  position: string;
}

export interface CreateTeacherDto {
  firstName: string;
  lastName: string;
  middleName: string;
  department: string;
  position: string;
  email: string;
  password: string;
}

export type UpdateTeacherDto = Partial<CreateTeacherDto>;
