import { PrismaClient } from '@prisma/client';
import { DEPARTMENTS_SEED, USERS_SEED, ROLES_SEED } from './seed-data';
import { hashPassword } from '../src/utils';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.department.deleteMany();
  await prisma.role.deleteMany();

  await prisma.department.createMany({
    data: DEPARTMENTS_SEED,
  });

  await prisma.role.createMany({
    data: ROLES_SEED,
  });

  const departments = await prisma.department.findMany();

  await Promise.all(
    USERS_SEED.map(async (teacher) => {
      const randomDepartment =
        departments[Math.floor(Math.random() * departments.length)];
      return prisma.user.create({
        data: {
          ...teacher,
          password: await hashPassword(teacher.password),
          department: { connect: { id: randomDepartment.id } },
          role: { connect: { key: teacher.role } },
        },
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
