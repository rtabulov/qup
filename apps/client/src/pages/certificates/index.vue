<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { format } from 'date-fns';
import { DocumentReportIcon } from '@heroicons/vue/outline';
import { Certificate } from '../../types';
import { getAllCertificates } from '../../api';
import { limitLength } from '../../utils';
import AppButton from '../../components/AppButton.vue';

const certificates = ref<Certificate[]>([]);
getAllCertificates().then((v) => (certificates.value = v));
watchEffect(() => console.log(certificates.value.slice()));
</script>

<template>
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-2xl mb-4">Все сертификаты</h2>

    <AppButton as="a" target="_blank" href="/api/certificates/report">
      Скачать в Excel
      <DocumentReportIcon class="w-6 h-6 inline ml-2" />
    </AppButton>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead class="text-lg whitespace-nowrap bg-black">
        <th class="px-3 py-4 text-white">Название</th>
        <th class="px-3 py-4 text-white">Место прохождения</th>
        <!-- <th class="px-3 py-4 text-white ">Начало обучения</th> -->
        <!-- <th class="px-3 py-4 text-white ">Конец обучения</th> -->
        <th class="px-3 py-4 text-white">Дата выдачи</th>
        <th class="px-3 py-4 text-white">Файлы</th>
      </thead>
      <tbody>
        <tr
          v-for="cert in certificates"
          class="odd:bg-gray odd:bg-opacity-40 text-opacity-75 text-white hover:text-opacity-100 transition-colors"
        >
          <td class="px-3 py-4">{{ cert.name }}</td>
          <td class="px-3 py-4">{{ cert.issuedBy }}</td>
          <!-- <td class="px-3 py-4 whitespace-nowrap">{{ cert.startDate }}</td> -->
          <!-- <td class="px-3 py-4 whitespace-nowrap">{{ cert.endDate }}</td> -->
          <td class="px-3 py-4 whitespace-nowrap">
            {{ format(new Date(cert.issuedDate), 'dd.MM.yyyy') }}
          </td>
          <td class="px-3 py-4">
            <a
              v-for="file in cert.files"
              :key="file.id"
              class="text-red hover:text-pink block my-1 transition-colors whitespace-nowrap"
              :href="`/uploads/certificates/${file.name}`"
              target="_blank"
              >{{ limitLength(file.name) }}</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": "hr"
  }
}
</route>
