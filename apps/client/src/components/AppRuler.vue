<script lang="ts" setup>
interface Props {
  center: boolean;
}

withDefaults(defineProps<Props>(), { center: false });
</script>

<template>
  <hr
    class="max-w-xs my-6 border-red border-b-[3px]"
    :class="{ 'mx-auto': center }"
  />
</template>
