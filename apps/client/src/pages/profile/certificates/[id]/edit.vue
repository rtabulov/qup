<script lang="ts" setup>
import { format } from 'date-fns';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getCertificate, updateCertificate } from '../../../../api';
import { Certificate, UpdateCertificateDto } from '../../../../types';
import AppButton from '../../../../components/AppButton.vue';
import AppInput from '../../../../components/AppInput.vue';
import FileInput from '../../../../components/FileInput.vue';
import AppRuler from '../../../../components/AppRuler.vue';
import { useStore } from '../../../../store';

const props = defineProps<{ id: string }>();

const certificate = ref<Certificate | null>(null);
getCertificate(props.id).then((c) => (certificate.value = c));

const store = useStore();
const router = useRouter();

const errors = ref<Partial<Record<keyof UpdateCertificateDto, string>>>({});
const isLoading = ref(false);
async function onSubmit(e: Event) {
  isLoading.value = true;

  try {
    const formData = new FormData(e.target as HTMLFormElement);

    const dateFields = ['issuedDate', 'startDate', 'endDate'];
    dateFields.forEach((d) =>
      formData.set(d, new Date(formData.get(d) as string).toISOString()),
    );

    await updateCertificate(props.id, formData);
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
  <h1 class="text-3xl text-center">Обновить сертификат</h1>
  <AppRuler center />
  <form
    class="max-w-xl mx-auto space-y-4"
    @submit.prevent="onSubmit"
    v-if="certificate"
  >
    <p class="font-bold">Комментарий от проверяющего</p>
    <p v-if="certificate?.comment" class="border-l-[3px] border-muted pl-3">
      {{ certificate.comment }}
    </p>

    <FileInput multiple name="files" :initial-value="certificate.files" />

    <AppInput
      type="text"
      required
      label="Название курса повышения квалификации"
      name="name"
      :initial-value="certificate.name"
      :error="errors.name"
    />
    <AppInput
      type="text"
      required
      label="Кем выдан"
      name="issuedBy"
      :initial-value="certificate.issuedBy"
      :error="errors.issuedBy"
    />
    <AppInput
      type="date"
      required
      label="Дата выдачи"
      name="issuedDate"
      :initial-value="format(new Date(certificate.issuedDate), 'yyyy-MM-dd')"
      :error="errors.issuedDate"
    />
    <AppInput
      type="date"
      required
      label="Дата начала прохождения обучения"
      name="startDate"
      :initial-value="format(new Date(certificate.startDate), 'yyyy-MM-dd')"
      :error="errors.startDate"
    />
    <AppInput
      type="date"
      required
      label="Дата окончания прохождения обучения"
      name="endDate"
      :initial-value="format(new Date(certificate.endDate), 'yyyy-MM-dd')"
      :error="errors.endDate"
    />

    <AppButton :disabled="isLoading" type="submit" class="w-full">
      Обновить сертификат
    </AppButton>
  </form>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": "teacher"
  }
}
</route>
