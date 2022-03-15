import { Connection } from 'typeorm';
import { Department } from '../departments/entities/department.entity';

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

export default class CreateDepartments {
  async run(factory, connection: Connection) {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Department)
      .values(DEPARTMENTS_SEED)
      .orIgnore()
      .execute();
  }
}
