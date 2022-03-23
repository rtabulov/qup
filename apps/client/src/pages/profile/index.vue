<script lang="ts" setup>
import { computed } from 'vue';
import { format } from 'date-fns';
import { TrashIcon, PlusIcon } from '@heroicons/vue/outline';
import { useUserStore } from '../../store';
import { removeCertificate } from '../../api';
import AppButton from '../../components/AppButton.vue';
import { useNotificationsStore } from '../../store/notifications-store';
import { limitLength, roleNames } from '../../utils';
import AppRuler from '../../components/AppRuler.vue';
import { Certificate } from '../../types';

const store = useUserStore();
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
  <div class="my-6">
    <h2 class="text-2xl mb-4">Ваши сертификаты</h2>
    <div class="overflow-x-auto">
      <table class="w-full" v-if="user">
        <thead class="text-lg whitespace-nowrap bg-black">
          <th class="px-3 py-4 text-white">Название</th>
          <th class="px-3 py-4 text-white">Место прохождения</th>
          <!-- <th class="px-3 py-4 text-white ">Начало обучения</th> -->
          <!-- <th class="px-3 py-4 text-white ">Конец обучения</th> -->
          <!-- <th class="px-3 py-4 text-white">Дата выдачи</th> -->
          <!-- <th class="px-3 py-4 text-white">Файлы</th> -->
          <th class="px-3 py-4 text-white">Статус</th>
          <th class="px-3 py-4 text-white">Удалить</th>
        </thead>
        <tbody>
          <tr v-if="!user.certificates.length">
            <td colspan="100%" class="text-center py-6">
              <p class="mb-4 text-lg">Вы еще не добавили ни один сертификат</p>
              <AppButton as="RouterLink" to="/certificates/create">
                Добавить сертификат
                <PlusIcon class="inline-block h-5 w-5 translate-y-[2px] ml-2" />
              </AppButton>
            </td>
          </tr>
          <tr
            v-for="cert in user.certificates"
            class="odd:bg-gray odd:bg-opacity-40 text-opacity-75 text-white hover:text-opacity-100 transition-colors"
          >
            <td class="px-3 py-4">
              <RouterLink :to="`/profile/certificates/${cert.id}/edit`">{{
                cert.name
              }}</RouterLink>
            </td>
            <td class="px-3 py-4">{{ cert.issuedBy }}</td>
            <!-- <td class="px-3 py-4 whitespace-nowrap">{{ cert.startDate }}</td> -->
            <!-- <td class="px-3 py-4 whitespace-nowrap">{{ cert.endDate }}</td> -->
            <!-- <td class="px-3 py-4 whitespace-nowrap">
              {{ format(new Date(cert.issuedDate), 'dd.MM.yyyy') }}
            </td> -->
            <!-- <td class="px-3 py-4">
              <a
                v-for="file in cert.files"
                :key="file.id"
                class="text-red hover:text-pink block my-1 transition-colors whitespace-nowrap"
                :href="`/uploads/certificates/${file.name}`"
                target="_blank"
                >{{ limitLength(file.name) }}</a
              >
            </td> -->
            <td class="text-center">{{ getStatus(cert) }}</td>
            <td class="text-center">
              <button @click="onCertificateRemove(cert.id)">
                <TrashIcon
                  class="h-6 w-6 inline-block hover:text-red cursor-pointer transition-colors"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid grid-cols-2" v-if="user">
    <div>
      <h2 class="text-2xl mb-4">Ваши данные</h2>
      <table class="w-full">
        <tbody>
          <tr>
            <th class="min-w-[200px] py-2 text-pink text-left">Фамилия</th>
            <td>{{ user.lastName }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-pink text-left">Имя</th>
            <td>{{ user.firstName }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-pink text-left">Отчество</th>
            <td>{{ user.middleName }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-pink text-left">Должность</th>
            <td>{{ user.position }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-pink text-left">Роль</th>
            <td>{{ roleNames[user.role] }}</td>
          </tr>
          <tr>
            <th class="min-w-[200px] py-2 text-pink text-left">E-mail</th>
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
    "requiresAuth": true
  }
}
</route>
