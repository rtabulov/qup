<script lang="ts" setup>
import { useUserStore } from '../store';
import TheNavigationLink from './TheNavigationLink.vue';

const store = useUserStore();

const { log } = console;
</script>

<template>
  <nav class="bg-dark font-display">
    <div class="container px-0 flex">
      <div class="flex">
        <TheNavigationLink to="/">Home</TheNavigationLink>
      </div>
      <div class="flex ml-auto">
        <template v-if="store.user">
          <TheNavigationLink to="/certificates/create"
            >Add new certificate</TheNavigationLink
          >
          <TheNavigationLink to="/profile">
            {{ store.user?.lastName }}
            {{ store.user?.firstName }}
          </TheNavigationLink>
          <TheNavigationLink
            as="button"
            @click="async () => log(await store.logout())"
          >
            Logout</TheNavigationLink
          >
        </template>
        <template v-else>
          <TheNavigationLink to="/register">Register</TheNavigationLink>
          <TheNavigationLink to="/login">Login</TheNavigationLink>
        </template>
      </div>
    </div>
  </nav>
</template>
