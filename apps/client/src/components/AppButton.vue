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
    class="bg-secondary-500 shadow-md text-center justify-center inline-flex py-2 px-5 hover:bg-secondary-600 focus:outline-none focus:ring focus:ring-neutral-200"
  >
    <slot></slot>
  </component>
</template>
