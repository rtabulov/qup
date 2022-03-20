<script lang="ts" setup>
import { watchEffect } from 'vue';
import { useUserStore } from './store';
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';
import AppNotifications from './components/AppNotifications.vue';

const store = useUserStore();

watchEffect(() => console.log(store.user));
</script>

<template>
  <AppNotifications />
  <div class="flex flex-col min-h-screen">
    <TheNavigation class="shrink-0" />

    <main class="font-body bg-dark text-white grow flex">
      <div class="container py-6">
        <RouterView />
        <svg
          v-if="false"
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </main>

    <TheFooter class="shrink-0" />
  </div>
</template>
