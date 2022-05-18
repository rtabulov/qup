<script lang="ts" setup>
import { Component } from 'vue';

interface Props {
  as?: string | Component;
  variant?: string;
}
withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
});
</script>

<template>
  <component
    :is="as"
    class="inline-flex justify-center py-2 px-5 text-center shadow-md transition-all hover:brightness-90 focus:outline-none focus:ring focus:ring-muted disabled:bg-muted disabled:bg-opacity-50"
    :class="{
      'bg-blue text-white': variant === 'default',
      'bg-danger bg-opacity-60 text-black': variant === 'secondary',
    }"
  >
    <slot></slot>
  </component>
</template>
