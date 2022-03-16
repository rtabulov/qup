import { Connection } from 'typeorm';
import { Teacher } from '../teachers/entities/teacher.entity';
import { Department } from '../departments/entities/department.entity';

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

export default class CreateTeachers {
  async run(factory, connection: Connection) {
    const all = await connection.getRepository(Teacher).find();
    await connection.getRepository(Teacher).remove(all);

    const departments = await connection.getRepository(Department).find();

    const seed = TEACHERS_SEED.map((t) => {
      const rand = Math.floor(Math.random() * departments.length);
      return { ...t, department: departments[rand].id };
    });

    await connection
      .createQueryBuilder()
      .insert()
      .into(Teacher)
      .values(seed)
      .orIgnore()
      .execute();
  }
}
