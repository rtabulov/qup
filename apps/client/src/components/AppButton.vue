<script lang="ts" setup>
interface Props {
  as?: string;
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
    class="shadow-md text-center justify-center inline-flex py-2 px-5 hover:brightness-90 focus:outline-none focus:ring focus:ring-muted transition-all disabled:bg-muted disabled:bg-opacity-50"
    :class="{
      'bg-red text-white': variant === 'default',
      'bg-gray text-white': variant === 'secondary',
    }"
  >
    <slot></slot>
  </component>
</template>
