<script lang="ts" setup>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheNavigation />

  <main class="font-body">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <TheFooter />
</template>
