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
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'M',
    email: 'john@gmail.com',
    password: 'wordpass',
    position: 'Старший преподаватель',
    role: 'departmentHead',
  },
  {
    firstName: 'Пётр',
    lastName: 'Петров',
    middleName: 'Петрович',
    email: 'petr@gmail.com',
    password: 'wordpass',
    position: 'Старший преподаватель',
    role: 'hr',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    email: 'ivan@gmail.com',
    password: 'wordpass',
    position: 'Старший преподаватель',
    role: 'teacher',
  },
  {
    firstName: 'Админ',
    lastName: 'Админов',
    middleName: 'Админович',
    email: 'admin@gmail.com',
    password: 'wordpass',
    role: 'admin',
  },
];
