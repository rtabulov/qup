<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLinkProps } from 'vue-router';

interface Props {
  to: RouterLinkProps['to'];
  external?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  external: false,
});
const isExternal = computed(
  () =>
    props.external ||
    (typeof props.to === 'string' && props.to.startsWith('http')),
);
const toProp = computed(() => (isExternal.value ? 'href' : 'to'));
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'RouterLink'"
    :[toProp]="to"
    :target="isExternal ? '_blank' : undefined"
    class="font-medium text-blue transition-opacity hover:text-opacity-75"
  >
    <slot />
  </component>
</template>
