<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppInput from '../../components/AppInput.vue';
import AppButton from '../../components/AppButton.vue';
import { createCertificate } from '../../api';
import { useUserStore } from '../../store';
import { CreateCertificateDto } from '../../types';
import FileInput from '../../components/FileInput.vue';
import AppRuler from '../../components/AppRuler.vue';

const router = useRouter();
const store = useUserStore();

const errors = ref<Partial<Record<keyof CreateCertificateDto, string>>>({});
const isLoading = ref(false);

async function onSubmit(e: Event) {
  isLoading.value = true;

  try {
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData.get('issuedDate'));
    const dateFields = ['issuedDate', 'startDate', 'endDate'];
    dateFields.forEach((d) =>
      formData.set(d, new Date(formData.get(d) as string).toISOString()),
    );

    console.log(Object.fromEntries(formData));

    await createCertificate(formData);
    await store.tryLoggingIn();
    router.push('/profile');
  } catch (e: any) {
    isLoading.value = false;
    if (e.response) {
      errors.value = e.response.data;
    }
  }
}
</script>

<template>
  <h1 class="text-3xl text-center">Добавить сертификат</h1>
  <AppRuler center />
  <form class="max-w-xl mx-auto space-y-4" @submit.prevent="onSubmit">
    <FileInput multiple name="files" />

    <AppInput
      type="text"
      required
      label="Название курса повышения квалификации"
      name="name"
      :error="errors.name"
    />
    <AppInput
      type="text"
      required
      label="Кем выдан"
      name="issuedBy"
      :error="errors.issuedBy"
    />
    <AppInput
      type="date"
      required
      label="Дата выдачи"
      initial-value="2022-03-20"
      name="issuedDate"
      :error="errors.issuedDate"
    />
    <AppInput
      type="date"
      required
      initial-value="2022-01-11"
      label="Дата начала прохождения обучения"
      name="startDate"
      :error="errors.startDate"
    />
    <AppInput
      type="date"
      required
      initial-value="2022-02-11"
      label="Дата окончания прохождения обучения"
      name="endDate"
      :error="errors.endDate"
    />

    <AppButton :disabled="isLoading" type="submit" class="w-full"
      >Добавить сертификат</AppButton
    >
  </form>
</template>
<route lang="json">
{
  "meta": {
    "requiresAuth": true
  }
}
</route>
