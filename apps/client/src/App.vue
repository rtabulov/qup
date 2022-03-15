<script lang="ts" setup>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheNavigation class="shrink-0" />

    <main class="font-body bg-primary-900 text-neutral-50 grow flex">
      <div class="container">
        <RouterView />
      </div>
    </main>

    <TheFooter class="shrink-0" />
  </div>
</template>
