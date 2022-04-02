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
  <div
    class="flex w-full items-center justify-center bg-grey-lighter text-black"
  >
    <label
      class="flex gap-3 items-center px-6 py-3 bg-black text-blue rounded-lg shadow-lg tracking-wide uppercase cursor-pointer hover:bg-blue hover:text-black transition-colors"
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
      class="aspect-square rounded-md overflow-hidden"
    >
      <img
        v-if="isPicture(file.name)"
        :src="getPreviewSrc(file)"
        :alt="file.name"
        class="w-full h-full object-contain bg-gray"
      />
      <span
        v-else
        class="w-full h-full flex items-center justify-center bg-gray text-center p-3"
        >{{ file.name }}</span
      >
    </div>
  </div>
  <div v-else-if="initialValue" class="grid grid-cols-3 gap-3">
    <div
      v-for="file in initialValue"
      :key="file.name"
      class="aspect-square rounded-md overflow-hidden"
    >
      <img
        v-if="isPicture(file.name)"
        :src="`/api/uploads/certificates/${file.name}`"
        :alt="file.name"
        class="w-full h-full object-contain bg-gray"
      />
      <span
        v-else
        class="w-full h-full flex items-center justify-center bg-gray text-center p-3"
        >{{ file.name }}</span
      >
    </div>
  </div>
</template>
