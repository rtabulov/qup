<script lang="ts" setup>
import { format } from 'date-fns';
import { ref } from 'vue';
import { getCertificatesAwaitingApproval } from '../../api';
import { Certificate } from '../../types';
import { limitLength } from '../../utils';
import AppRuler from '../../components/AppRuler.vue';

const certificates = ref<Certificate[]>([]);
getCertificatesAwaitingApproval().then((c) => (certificates.value = c));
</script>

<template>
  <h1 class="text-2xl mb-4">Сертификаты ожидающие подтверждения</h1>
  <AppRuler />

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
          <td class="px-3 py-4">
            <RouterLink :to="`/certificates/${cert.id}`">{{
              cert.name
            }}</RouterLink>
          </td>
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
