import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Extension of the PrismaClient for use with NestJs.
 */
@Injectable()
export class SupabaseService extends SupabaseClient implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {
    super(
      configService.get('SUPABASE_URL'),
      configService.get('SUPABASE_PUBLIC_KEY'),
    );
  }

  async onModuleInit() {
    const { user, session, error } = await this.auth.signIn({
      email: this.configService.get('SUPABASE_USER_EMAIL'),
      password: this.configService.get('SUPABASE_USER_PASSWORD'),
    });

    if (error) {
      throw new Error('could not sign in to supabase');
    }
  }

  /**
   * Disconnect from the database when the application is shutting down.
   */
  // async onModuleDestroy(): Promise<void> {
  //   await this.$disconnect();
  // }

  /**
   * A utility function used to clear all database rows for testing.
   */
  // clearDatabase() {
  //   const modelNames = Prisma.dmmf.datamodel.models.map((model) => model.name);

  //   return Promise.all(
  //     modelNames.map((modelName) =>
  //       this[modelName[0].toLowerCase() + modelName.slice(1)].deleteMany(),
  //     ),
  //   );
  // }

  // async enableShutdownHooks(app: INestApplication) {
  //   this.$on('beforeExit', async () => {
  //     await app.close();
  //   });
  // }
}
