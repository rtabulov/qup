import { Connection } from 'typeorm';
import { Department } from '../departments/entities/department.entity';
import { Teacher } from '../teachers/entities/teacher.entity';

const DEPARTMENTS_SEED = [
  { name: 'Кафедра "Бизнес и управление"' },
  { name: 'Кафедра "Информационные системы"' },
  { name: 'Кафедра "Социально-гуманитарные дисциплины"' },
  { name: 'Кафедра "Технология и стандартизация"' },
  { name: 'Кафедра "Технология легкой промышленности и дизайна"' },
  { name: 'Кафедра "Туризм и сервис"' },
  { name: 'Кафедра "Химия, химическая технология и экология"' },
  { name: 'Факультет экономики и сервиса' },
];

const TEACHERS_SEED = [
  {
    firstName: 'Пётр',
    lastName: 'Петров',
    middleName: 'Петрович',
    email: 'petr@gmail.com',
    password: 'wordpass',
    position: 'Старший преподаватель',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    email: 'ivan@gmail.com',
    password: 'wordpass',
    position: 'Старший преподаватель',
  },
];

export default class CreateDepartments {
  async run(factory, connection: Connection) {
    await connection.createQueryBuilder().delete().from(Teacher).execute();
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
      seed.map((teacher) => {
        const t = connection.getRepository(Teacher).create(teacher);
        return connection.getRepository(Teacher).save(t);
      }),
    );
  }
}
