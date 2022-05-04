export const DEPARTMENTS_SEED = [
  { name: 'Бизнес и управление' },
  { name: 'Информационные системы' },
  { name: 'Социально-гуманитарные дисциплины' },
  { name: 'Технология и стандартизация' },
  { name: 'Технология легкой промышленности и дизайна' },
  { name: 'Туризм и сервис' },
  { name: 'Химия, химическая технология и экология' },
];

export const ROLES_SEED = [
  { name: 'Администратор', key: 'admin' },
  { name: 'Зав. кафеды', key: 'departmentHead' },
  { name: 'HR', key: 'hr' },
  { name: 'Преподаватель', key: 'teacher' },
];

export const PROFILES_SEED = [
  {
    active: true,
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'M',
    position: 'departmentHead',
    role: 'departmentHead',
    user: { email: 'john@gmail.com', password: 'wordpass' },
  },
  {
    active: true,
    firstName: 'Пётр',
    lastName: 'Петров',
    middleName: 'Петрович',
    position: 'hr',
    role: 'hr',
    user: { email: 'petr@gmail.com', password: 'wordpass' },
  },
  {
    active: true,
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    position: 'Старший преподаватель',
    role: 'teacher',
    user: { email: 'ivan@gmail.com', password: 'wordpass' },
  },
  {
    active: true,
    firstName: 'Админ',
    lastName: 'Админов',
    middleName: 'Админович',
    position: 'admin',
    role: 'admin',
    user: { email: 'admin@gmail.com', password: 'wordpass' },
  },
];
