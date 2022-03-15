<script setup lang="ts">
fetch('/api/departments')
  .then((r) => r.json())
  .then((r) => console.log('success', r));
</script>

<template>
  <img class="bg-primary-500" alt="Vue logo" src="./assets/logo.png" />
</template>
