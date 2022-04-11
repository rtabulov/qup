import { PrismaClient } from '@prisma/client';
import { DEPARTMENTS_SEED, USERS_SEED, ROLES_SEED } from './seed-data';
import { hashPassword } from '../src/utils';

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    DEPARTMENTS_SEED.map((dpt) =>
      prisma.department.upsert({
        where: { name: dpt.name },
        update: dpt,
        create: dpt,
      }),
    ),
  );

  await Promise.all(
    ROLES_SEED.map((role) =>
      prisma.role.upsert({
        where: { key: role.key },
        update: role,
        create: role,
      }),
    ),
  );

  const departments = await prisma.department.findMany();

  await Promise.all(
    USERS_SEED.map(async (teacher) => {
      const randomDepartment =
        departments[Math.floor(Math.random() * departments.length)];

      const completeTeacher = {
        ...teacher,
        password: await hashPassword(teacher.password),
        department: { connect: { id: randomDepartment.id } },
        role: { connect: { key: teacher.role } },
      };

      return prisma.user.upsert({
        where: { email: teacher.email },
        update: completeTeacher,
        create: completeTeacher,
      });
    }),
  );

  const teachers = await prisma.user.findMany({ include: { role: true } });

  console.log(teachers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
