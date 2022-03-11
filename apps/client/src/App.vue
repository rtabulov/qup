<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';

const users = ref([]);
fetch('/api/users')
  .then((r) => r.json())
  .then((usersResponse) => (users.value = usersResponse));
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <pre :style="{ textAlign: 'left' }"
    >{{ JSON.stringify(users, null, 2) }}
  </pre>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
