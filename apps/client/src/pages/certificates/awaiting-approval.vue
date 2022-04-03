<script lang="ts" setup>
import { format } from 'date-fns';
import { ref } from 'vue';
import { getCertificatesAwaitingApproval } from '../../api';
import { Certificate } from '../../types';
import { limitLength } from '../../utils';
import AppRuler from '../../components/AppRuler.vue';
import AppTable from '../../components/AppTable.vue';
import AppTableHeader from '../../components/AppTableHeader.vue';
import AppTableRow from '../../components/AppTableRow.vue';
import InlineLink from '../../components/InlineLink.vue';

const certificates = ref<Certificate[]>([]);
getCertificatesAwaitingApproval().then((c) => (certificates.value = c));
</script>

<template>
  <h1 class="text-2xl mb-4">Сертификаты ожидающие подтверждения</h1>
  <AppRuler />

  <AppTable>
    <template #head>
      <AppTableHeader>Название</AppTableHeader>
      <AppTableHeader>Место прохождения</AppTableHeader>
      <AppTableHeader>Дата выдачи</AppTableHeader>
      <AppTableHeader>Файлы</AppTableHeader>
    </template>

    <AppTableRow v-for="cert in certificates">
      <td class="px-3 py-4">
        <RouterLink :to="`/certificates/${cert.id}`">{{
          cert.name
        }}</RouterLink>
      </td>
      <td class="px-3 py-4">{{ cert.issuedBy }}</td>
      <td class="px-3 py-4 whitespace-nowrap">
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
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": ["hr", "departmentHead"]
  }
}
</route>
