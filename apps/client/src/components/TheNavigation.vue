<script lang="ts" setup>
import TheNavigationLink from './TheNavigationLink.vue';
</script>

<template>
  <nav class="bg-dark font-display">
    <div class="container px-0">
      <div class="flex">
        <TheNavigationLink to="/">Home</TheNavigationLink>
        <TheNavigationLink to="/register">Register</TheNavigationLink>
        <TheNavigationLink to="/login">Login</TheNavigationLink>
      </div>
    </div>
  </nav>
</template>
