<script lang="ts" setup>
import { computed } from 'vue';
import { TrashIcon, PlusIcon } from '@heroicons/vue/outline';
import { useStore } from '../../store';
import { removeCertificate } from '../../api';
import AppButton from '../../components/AppButton.vue';
import { useNotificationsStore } from '../../store/notifications-store';
import AppRuler from '../../components/AppRuler.vue';
import { Certificate } from '../../types';
import AppTable from '../../components/AppTable.vue';
import AppTableHeader from '../../components/AppTableHeader.vue';
import AppTableRow from '../../components/AppTableRow.vue';

const store = useStore();
const user = computed(() => store.user);

const notifications = useNotificationsStore();

async function onCertificateRemove(id: string) {
  await removeCertificate(id);
  await store.tryLoggingIn();
  notifications.create({
    text: 'Сертификат успешно удалён',
  });
}

function getStatus(certificate: Certificate) {
  if (certificate.approved) {
    return 'Подтверждён';
  }

  if (certificate.awaitingApproval) {
    return 'На подтверждении';
  }

  return 'Нуждается в обновлении';
}
</script>

<template>
  <h1 class="text-3xl">Профиль пользователя</h1>
  <AppRuler />
  <div class="my-6" v-if="user">
    <h2 class="text-2xl mb-4">Ваши сертификаты</h2>
    <AppTable>
      <template #head>
        <AppTableHeader>Название</AppTableHeader>
        <AppTableHeader>Место прохождения</AppTableHeader>
        <!-- <AppTableHeader>Начало обучения</AppTableHeader> -->
        <!-- <AppTableHeader>Конец обучения</AppTableHeader> -->
        <!-- <AppTableHeader>Дата выдачи</AppTableHeader> -->
        <!-- <AppTableHeader>Файлы</AppTableHeader> -->
        <AppTableHeader>Статус</AppTableHeader>
        <AppTableHeader>Удалить</AppTableHeader>
      </template>

      <AppTableRow v-if="!user.certificates?.length">
        <td colspan="100%" class="text-center py-6">
          <p class="mb-4 text-lg">Вы еще не добавили ни один сертификат</p>
          <AppButton as="RouterLink" to="/certificates/create">
            Добавить сертификат
            <PlusIcon class="inline-block h-5 w-5 translate-y-[2px] ml-2" />
          </AppButton>
        </td>
      </AppTableRow>

      <AppTableRow v-for="cert in user.certificates">
        <td class="px-3 py-4">
          <RouterLink :to="`/profile/certificates/${cert.id}/edit`">{{
            cert.name
          }}</RouterLink>
        </td>
        <td class="px-3 py-4">{{ cert.issuedBy }}</td>
        <td class="text-center">{{ getStatus(cert) }}</td>
        <td class="text-center">
          <button
            v-if="!cert.approved"
            class="hover:text-blue transition-colors"
            @click="onCertificateRemove(cert.id)"
          >
            <TrashIcon class="h-6 w-6 inline-block" />
          </button>
        </td>
      </AppTableRow>
    </AppTable>
  </div>

  <div class="grid grid-cols-2" v-if="user">
    <div>
      <h2 class="text-2xl mb-4">Ваши данные</h2>
      <table class="w-full">
        <tbody>
          <tr>
            <th class="min-w-[200px] py-2 text-lightblue text-left">Фамилия</th>
            <td>{{ user.lastName }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-lightblue text-left">Имя</th>
            <td>{{ user.firstName }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-lightblue text-left">
              Отчество
            </th>
            <td>{{ user.middleName }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-lightblue text-left">
              Должность
            </th>
            <td>{{ user.position }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-lightblue text-left">Роль</th>
            <td>{{ user.role?.key }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-lightblue text-left">E-mail</th>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": "teacher"
  }
}
</route>
