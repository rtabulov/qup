<script lang="ts" setup>
import AppRuler from '../components/AppRuler.vue';
import AppButton from '../components/AppButton.vue';
</script>

<template>
  <div class="text-center py-6">
    <h1 class="text-3xl">Страница не найдена</h1>
    <AppRuler center />
    <AppButton as="RouterLink" to="/">Перейти на главную</AppButton>
  </div>
</template>
