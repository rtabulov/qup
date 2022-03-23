<script lang="ts" setup>
interface Props {
  center?: boolean;
  size?: number;
}

withDefaults(defineProps<Props>(), { center: false, size: 3 });
</script>

<template>
  <hr
    class="max-w-xs my-6 border-red"
    :style="{ borderBottomWidth: `${size}px` }"
    :class="{ 'mx-auto': center }"
  />
</template>
