import { PrismaClient } from '@prisma/client';
import { DEPARTMENTS_SEED, ROLES_SEED, PROFILES_SEED } from './seed-data';
import { hashPassword } from '../src/utils';
import supertokens from 'supertokens-node';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import Session from 'supertokens-node/recipe/session';
import SuperTokens from 'supertokens-node/lib/build/supertokens';
import { omit } from 'lodash';

const prisma = new PrismaClient();

// {
//   appInfo: config.appInfo,
//   supertokens: {
//     connectionURI: config.connectionURI,
//     apiKey: config.apiKey,
//   },
// }

supertokens.init({
  // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
  supertokens: {
    connectionURI: 'http://localhost:3567',
  },
  // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
  appInfo: {
    // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: 'qup',
    apiDomain: 'http://localhost:3000',
    websiteDomain: 'http://localhost:4000',
    apiBasePath: '/api/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

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

  const usersSeed = PROFILES_SEED.map((p) => p.user);
  await Promise.all(
    usersSeed.map((user) => EmailPassword.signUp(user.email, user.password)),
  );

  await supertokens.getUsersNewestFirst({
    includeRecipeIds: ['emailpassword'],
  });

  await Promise.all(
    PROFILES_SEED.map(async (profile) => {
      const randomDepartment =
        departments[Math.floor(Math.random() * departments.length)];

      const { id: userId, email } = await EmailPassword.getUserByEmail(
        profile.user.email,
      );

      const completeProfile = {
        ...omit(profile, 'user'),
        userId,
        email,
        department: { connect: { id: randomDepartment.id } },
        role: { connect: { key: profile.role } },
      };

      return prisma.profile.upsert({
        where: { email },
        update: completeProfile,
        create: completeProfile,
      });
    }),
  );

  const profiles = await prisma.profile.findMany({ include: { role: true } });

  console.log(profiles);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
