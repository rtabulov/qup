import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, Prisma } from '@prisma/client';
import { hashPassword } from '../utils';

/**
 * Extension of the PrismaClient for use with NestJs.
 */
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly configService: ConfigService) {
    /**
     * Get the database url from environmental variables and pass it in.
     */
    super({
      datasources: {
        db: {
          url: configService.get('DATABASE_URL'),
        },
      },
    });
  }

  /**
   * Connect to the database when the module is initialized.
   */
  async onModuleInit(): Promise<void> {
    await this.$connect();

    this.$use(async (params, next) => {
      if (
        params.model == 'User' &&
        (params.action == 'create' || params.action == 'update')
      ) {
        const user = params.args.data;
        const hash = user.password && (await hashPassword(user.password));
        user.password = hash;
        params.args.data = user;
      }
      return next(params);
    });
  }

  /**
   * Disconnect from the database when the application is shutting down.
   */
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  /**
   * A utility function used to clear all database rows for testing.
   */
  clearDatabase() {
    const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);

    return Promise.all(
      modelNames.map((modelName) =>
        this[modelName[0].toLowerCase() + modelName.slice(1)].deleteMany(),
      ),
    );
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
