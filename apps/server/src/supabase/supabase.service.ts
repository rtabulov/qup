import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SupabaseClient } from '@supabase/supabase-js';

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
}
