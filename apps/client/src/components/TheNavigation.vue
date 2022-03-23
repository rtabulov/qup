<script lang="ts" setup>
import { useUserStore } from '../store';
import TheNavigationLink from './TheNavigationLink.vue';
import {
  LogoutIcon,
  DocumentAddIcon,
  UserIcon,
  LoginIcon,
  UserAddIcon,
  UsersIcon,
  DocumentReportIcon,
  DocumentSearchIcon,
} from '@heroicons/vue/solid';
import { resolveAuthLevel } from '../utils';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

async function onLogout() {
  await store.logout();
  router.push('/');
}
</script>

<template>
  <nav class="bg-dark font-display">
    <div class="container px-0 flex">
      <div class="flex">
        <!-- <TheNavigationLink to="/">Home</TheNavigationLink> -->
      </div>
      <div class="flex ml-auto">
        <template v-if="resolveAuthLevel(store.user?.role, 'admin')">
          <TheNavigationLink to="/users">
            Все пользователи
            <UsersIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
        </template>

        <template v-if="resolveAuthLevel(store.user?.role, 'hr')">
          <TheNavigationLink to="/certificates">
            Подтвержденные
            <DocumentReportIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>

          <TheNavigationLink to="/certificates/awaiting-approval">
            На подтвеждении
            <DocumentSearchIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
        </template>

        <template v-if="store.user">
          <TheNavigationLink to="/certificates/create">
            Новый
            <DocumentAddIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
          <TheNavigationLink to="/profile">
            {{ store.user?.lastName }}
            {{ store.user?.firstName[0] }}.{{ store.user?.middleName[0] }}.

            <UserIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
          <TheNavigationLink as="button" @click="onLogout">
            Выйти
            <LogoutIcon class="inline-block w-5 h-5" />
          </TheNavigationLink>
        </template>
        <template v-else>
          <TheNavigationLink to="/register">
            Зарегистрироваться
            <UserAddIcon class="inline-block w-5 h-5" />
          </TheNavigationLink>
          <TheNavigationLink to="/login">
            Войти
            <LoginIcon class="inline-block w-5 h-5" />
          </TheNavigationLink>
        </template>
      </div>
    </div>
  </nav>
</template>
