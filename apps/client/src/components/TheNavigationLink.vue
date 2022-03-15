<script lang="ts" setup>
import type { RouterLinkProps } from 'vue-router';

defineProps<{
  to: RouterLinkProps['to'];
}>();
</script>

<template>
  <RouterLink
    class="py-2 px-4 text-pink hover:text-white inline-block hover:bg-muted transition-colors"
    :to="to"
    ><slot></slot
  ></RouterLink>
</template>
