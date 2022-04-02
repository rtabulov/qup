<script lang="ts" setup>
import { useStore } from '../store';
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

const store = useStore();
const router = useRouter();

async function onLogout() {
  await store.logout();
  router.push('/');
}
</script>

<template>
  <nav class="bg-light font-display">
    <div class="container px-0 flex">
      <div class="flex">
        <!-- <TheNavigationLink to="/">Home</TheNavigationLink> -->
      </div>
      <div class="flex ml-auto">
        <template v-if="resolveAuthLevel(store.user?.role?.key, 'admin')">
          <TheNavigationLink to="/users">
            Управление пользователями
            <UsersIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
        </template>

        <template
          v-if="
            store.user &&
            ['hr', 'departmentHead'].includes(store.user?.role?.key as string)
          "
        >
          <TheNavigationLink to="/certificates">
            Подтвержденные
            <DocumentReportIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>

          <TheNavigationLink to="/certificates/awaiting-approval">
            На подтвеждении
            <DocumentSearchIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
        </template>

        <template v-if="store.user && store.user.role?.key === 'teacher'">
          <TheNavigationLink to="/certificates/create">
            Новый
            <DocumentAddIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
          <TheNavigationLink to="/profile">
            {{ store.user?.lastName }}
            {{ store.user?.firstName[0] }}.{{ store.user?.middleName[0] }}.

            <UserIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
        </template>

        <template v-if="store.user">
          <TheNavigationLink as="button" @click="onLogout">
            Выйти
            <LogoutIcon class="inline-block w-5 h-5" />
          </TheNavigationLink>
        </template>
        <template v-else>
          <TheNavigationLink to="/register">
            Регистрация
            <UserAddIcon class="inline-block w-5 h-5" />
          </TheNavigationLink>
          <TheNavigationLink to="/login">
            Вход
            <LoginIcon class="inline-block w-5 h-5" />
          </TheNavigationLink>
        </template>
      </div>
    </div>
  </nav>
</template>
