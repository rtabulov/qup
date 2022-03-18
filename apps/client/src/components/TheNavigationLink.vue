<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { RouterLinkProps } from 'vue-router';

export default defineComponent({
  inheritAttrs: false,
  props: {
    to: {
      type: [Object, String] as PropType<RouterLinkProps['to']>,
      default: '/',
    },
    as: {
      type: String,
      default: 'a',
    },
  },
});
</script>

<template>
  <RouterLink custom :to="to" v-slot="{ navigate, href }">
    <component
      :is="as"
      class="py-2 px-4 text-pink hover:text-white inline-block hover:bg-muted transition-colors"
      :href="href"
      v-bind="$attrs"
      @click="navigate"
    >
      <slot></slot>
    </component>
  </RouterLink>
</template>
