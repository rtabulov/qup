<script lang="ts" setup>
import type { RouterLinkProps } from 'vue-router';

defineProps<{
  to: RouterLinkProps['to'];
}>();
</script>

<template>
  <RouterLink
    class="py-2 px-4 inline-block hover:bg-secondary-900 focus:bg-secondary-900 transition-colors"
    :to="to"
    ><slot></slot
  ></RouterLink>
</template>
