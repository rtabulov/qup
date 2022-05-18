<script lang="ts" setup>
import { watchEffect } from 'vue';
import { useStore } from './store';
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';
import AppNotifications from './components/AppNotifications.vue';

const store = useStore();
store.fetchRoles();

watchEffect(() => console.log(store.user));
</script>

<template>
  <AppNotifications />
  <div class="flex min-h-screen flex-col">
    <TheNavigation class="shrink-0" />

    <main class="flex grow bg-light font-body text-black">
      <div class="container py-6">
        <RouterView />
      </div>
    </main>

    <TheFooter class="shrink-0" />
  </div>
</template>
