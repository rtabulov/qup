<script lang="ts" setup>
import { useUserStore } from '../store';
import TheNavigationLink from './TheNavigationLink.vue';
import {
  LogoutIcon,
  PlusIcon,
  UserIcon,
  LoginIcon,
  UserAddIcon,
  UsersIcon,
  DocumentReportIcon,
} from '@heroicons/vue/solid';

const store = useUserStore();
</script>

<template>
  <nav class="bg-dark font-display">
    <div class="container px-0 flex">
      <div class="flex">
        <!-- <TheNavigationLink to="/">Home</TheNavigationLink> -->
      </div>
      <div class="flex ml-auto">
        <template v-if="store.user?.role === 'admin'">
          <TheNavigationLink to="/users">
            Все пользователи
            <UsersIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>

          <TheNavigationLink to="/certificates">
            Все сертификаты
            <DocumentReportIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
        </template>
        <template v-if="store.user">
          <TheNavigationLink to="/certificates/create"
            >Добавить сертификат
            <PlusIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
          <TheNavigationLink to="/profile">
            {{ store.user?.lastName }}
            {{ store.user?.firstName }}

            <UserIcon class="inline-block h-5 w-5 -translate-y-px" />
          </TheNavigationLink>
          <TheNavigationLink as="button" @click="() => store.logout()">
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
