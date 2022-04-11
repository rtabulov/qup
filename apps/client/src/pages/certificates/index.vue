<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { format } from 'date-fns';
import { DocumentReportIcon } from '@heroicons/vue/outline';
import { Certificate } from '../../types';
import { getAllCertificates } from '../../api';
import { limitLength } from '../../utils';
import AppButton from '../../components/AppButton.vue';
import AppRuler from '../../components/AppRuler.vue';
import InlineLink from '../../components/InlineLink.vue';
import AppTableRow from '../../components/AppTableRow.vue';
import AppTable from '../../components/AppTable.vue';
import AppTableHeader from '../../components/AppTableHeader.vue';

const certificates = ref<Certificate[]>([]);
getAllCertificates().then((v) => (certificates.value = v));
</script>

<template>
  <div class="mb-4 flex items-center justify-between">
    <h1 class="text-2xl">Подтвержденные сертификаты</h1>
    <AppRuler />

    <AppButton as="a" target="_blank" href="/api/certificates/report">
      Скачать в Excel
      <DocumentReportIcon class="ml-2 inline h-6 w-6" />
    </AppButton>
  </div>
  <div class="overflow-x-auto">
    <AppTable>
      <template #head>
        <AppTableHeader>Название</AppTableHeader>
        <AppTableHeader>Место прохождения</AppTableHeader>
        <AppTableHeader>Дата выдачи</AppTableHeader>
        <AppTableHeader>Файлы</AppTableHeader>
      </template>
      <AppTableRow v-for="cert in certificates">
        <td class="px-3 py-4">{{ cert.name }}</td>
        <td class="px-3 py-4">{{ cert.issuedBy }}</td>
        <td class="whitespace-nowrap px-3 py-4">
          {{ format(new Date(cert.issuedDate), 'dd.MM.yyyy') }}
        </td>
        <td class="px-3 py-4">
          <InlineLink
            v-for="file in cert.files"
            :key="file.id"
            :to="`/api/uploads/certificates/${file.name}`"
            class="block"
            external
            >{{ limitLength(file.name, 30) }}</InlineLink
          >
        </td>
      </AppTableRow>
    </AppTable>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": ["hr", "departmentHead"]
  }
}
</route>
