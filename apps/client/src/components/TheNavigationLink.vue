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
      class="inline-block py-2 px-4 text-blue transition-colors hover:bg-lightblue hover:bg-opacity-20 hover:text-black"
      :href="href"
      v-bind="$attrs"
      @click="navigate"
    >
      <slot></slot>
    </component>
  </RouterLink>
</template>
