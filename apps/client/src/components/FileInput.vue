<script lang="ts" setup>
import { ref } from 'vue';
import { PaperClipIcon } from '@heroicons/vue/outline';
import { isPicture } from '../utils';
import { FileMeta } from '../types';

interface Props {
  initialValue?: FileMeta[];
}

const props = withDefaults(defineProps<Props>(), { initialValue: undefined });

const filesPreview = ref<FileList | null>(null);

function getPreviewSrc(file: File) {
  return URL.createObjectURL(file);
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="bg-grey-lighter flex w-full items-center justify-center">
    <label
      class="flex cursor-pointer items-center gap-3 rounded-lg bg-blue px-6 py-3 uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-blue hover:text-black"
    >
      <PaperClipIcon class="h-5 w-5" />
      <span class="text-base leading-normal">Прикрепить файлы</span>
      <input
        v-bind="$attrs"
        type="file"
        class="hidden"
        @change="filesPreview = ($event.target as HTMLInputElement).files"
      />
    </label>
  </div>

  <div v-if="filesPreview" class="grid grid-cols-3 gap-3">
    <div
      v-for="file in filesPreview"
      :key="file.name"
      class="aspect-square overflow-hidden rounded-md"
    >
      <img
        v-if="isPicture(file.name)"
        :src="getPreviewSrc(file)"
        :alt="file.name"
        class="h-full w-full bg-lightblue bg-opacity-30 object-contain"
      />
      <span
        v-else
        class="flex h-full w-full items-center justify-center bg-lightblue bg-opacity-30 p-3 text-center"
        >{{ file.name }}</span
      >
    </div>
  </div>
  <div v-else-if="initialValue" class="grid grid-cols-3 gap-3">
    <div
      v-for="file in initialValue"
      :key="file.name"
      class="aspect-square overflow-hidden rounded-md"
    >
      <img
        v-if="isPicture(file.name)"
        :src="`/api/uploads/certificates/${file.name}`"
        :alt="file.name"
        class="h-full w-full bg-gray object-contain"
      />
      <span
        v-else
        class="flex h-full w-full items-center justify-center bg-gray p-3 text-center"
        >{{ file.name }}</span
      >
    </div>
  </div>
</template>
