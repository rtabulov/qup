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

export const USERS_SEED = [
  {
    active: true,
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'M',
    position: 'Старший преподаватель',
    role: 'departmentHead',
  },
  {
    active: true,
    firstName: 'Пётр',
    lastName: 'Петров',
    middleName: 'Петрович',
    position: 'Старший преподаватель',
    role: 'hr',
  },
  {
    active: true,
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    position: 'Старший преподаватель',
    role: 'teacher',
  },
  {
    active: true,
    firstName: 'Админ',
    lastName: 'Админов',
    middleName: 'Админович',
    role: 'admin',
  },
];
