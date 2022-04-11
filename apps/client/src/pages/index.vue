<script lang="ts" setup>
import AppRuler from '../components/AppRuler.vue';
import InlineLink from '../components/InlineLink.vue';
</script>

<template>
  <h1 class="text-3xl">
    Веб-платформа для учета и подтверждения повышения квалификации
    предодавателей КазУТБ 📃🎓✅
  </h1>

  <AppRuler />

  <h2 class="mb-6 text-2xl">Дипломная работа</h2>

  <p>
    Автор
    <InlineLink to="https://github.com/rtabulov">Расул Табулов</InlineLink>
  </p>

  <p>
    для начала работы перейдите к
    <InlineLink to="/register">регистрации</InlineLink>
  </p>
</template>

<route lang="json">
{
  "meta": {
    "requiresGuest": true
  }
}
</route>
