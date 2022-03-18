<script lang="ts" setup>
import AppInput from '../../components/AppInput.vue';
import AppButton from '../../components/AppButton.vue';
import { ref } from 'vue';
import { createCertificate } from '../../api';

const previewSrcs = ref<string[]>([]);

async function onSubmit(e: Event) {
  const formData = new FormData(e.target as HTMLFormElement);

  console.log(Object.fromEntries(formData));

  const res = await createCertificate(formData);
  console.log(res);
}
</script>

<template>
  <h1 class="text-3xl text-center">Добавить сертификат</h1>
  <hr class="max-w-xs my-6 mx-auto border-red border-b-[3px]" />
  <form class="max-w-xl mx-auto space-y-4" @submit.prevent="onSubmit">
    <AppInput
      type="text"
      required
      placeholder="Название курса повышения квалификации"
      name="name"
    />
    <AppInput type="text" required placeholder="Кем выдан" name="issuedBy" />
    <AppInput
      type="date"
      required
      placeholder="Дата выдачи"
      name="issuedDate"
      initialValue="2022-01-03"
    />
    <AppInput
      type="date"
      required
      placeholder="Дата начала прохождения обучения"
      name="startDate"
      initialValue="2022-01-01"
    />
    <AppInput
      type="date"
      required
      placeholder="Дата окончания прохождения обучения"
      name="endDate"
      initialValue="2022-01-02"
    />

    <AppButton type="submit" class="w-full">Войти</AppButton>

    <div
      class="flex w-full items-center justify-center bg-grey-lighter text-black"
    >
      <label
        class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-red cursor-pointer hover:bg-red hover:text-white transition-colors"
      >
        <svg
          class="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="mt-2 text-base leading-normal">Выберите файл</span>
        <input type="file" class="hidden" multiple name="files" />
      </label>
    </div>

    <div class="grid grid-cols-3">
      <div v-for="src in previewSrcs" :key="src" class="aspect-square">
        <img :src="src" alt="preview" class="w-full h-full object-cover" />
      </div>
    </div>
  </form>
</template>
<route lang="json">
{
  "meta": {
    "requiresAuth": true
  }
}
</route>
