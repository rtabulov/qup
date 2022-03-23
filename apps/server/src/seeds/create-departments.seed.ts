import { Connection } from 'typeorm';
import { Department } from '../departments/entities/department.entity';
import { User } from '../auth/models/user.entity';

const DEPARTMENTS_SEED: Partial<Department>[] = [
  { name: 'Бизнес и управление' },
  { name: 'Информационные системы' },
  { name: 'Социально-гуманитарные дисциплины' },
  { name: 'Технология и стандартизация' },
  { name: 'Технология легкой промышленности и дизайна' },
  { name: 'Туризм и сервис' },
  { name: 'Химия, химическая технология и экология' },
];

const TEACHERS_SEED: Partial<User>[] = [
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
];

const SUPERUSER: Partial<User>[] = [
  {
    firstName: 'Админ',
    lastName: 'Админов',
    middleName: 'Админович',
    email: 'admin@gmail.com',
    password: 'wordpass',
    role: 'admin',
  },
];

export default class CreateDepartments {
  async run(factory, connection: Connection) {
    await connection.createQueryBuilder().delete().from(User).execute();
    await connection.createQueryBuilder().delete().from(Department).execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Department)
      .values(DEPARTMENTS_SEED)
      .orIgnore()
      .execute();

    const departments = await connection.getRepository(Department).find();

    const seed = TEACHERS_SEED.map((t) => {
      const rand = Math.floor(Math.random() * departments.length);
      return { ...t, department: departments[rand].id };
    });

    await Promise.all(
      seed.map((user) => {
        const t = connection.getRepository(User).create(user);
        return connection.getRepository(User).save(t);
      }),
    );

    const t = connection.getRepository(User).create(SUPERUSER);
    return connection.getRepository(User).save(t);
  }
}
