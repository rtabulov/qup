<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLinkProps } from 'vue-router';

const props = defineProps<{ to: RouterLinkProps['to'] }>();
const isExternal = computed(
  () => typeof props.to === 'string' && props.to.startsWith('http'),
);
const toProp = computed(() => (isExternal.value ? 'href' : 'to'));
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'RouterLink'"
    :[toProp]="to"
    :target="isExternal ? '_blank' : undefined"
    class="text-red hover:text-opacity-75 transition-opacity"
  >
    <slot />
  </component>
</template>
