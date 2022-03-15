<script lang="ts" setup>
interface Props {
  as?: string;
}
withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <component
    :is="as"
    class="bg-red text-white shadow-md text-center justify-center inline-flex py-2 px-5 hover:brightness-90 focus:outline-none focus:ring focus:ring-muted transition-all"
  >
    <slot></slot>
  </component>
</template>
