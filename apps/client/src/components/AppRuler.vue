<script lang="ts" setup>
interface Props {
  center?: boolean;
  size?: number;
}

withDefaults(defineProps<Props>(), { center: false, size: 3 });
</script>

<template>
  <hr
    class="my-6 max-w-xs border-0 border-blue bg-transparent"
    :style="{ borderBottomWidth: `${size}px` }"
    :class="{ 'mx-auto': center }"
  />
</template>
