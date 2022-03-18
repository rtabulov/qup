<script lang="ts" setup>
import { computed, watchEffect } from 'vue';
import { useUserStore } from '../../store';
import { User } from '../../types';

const store = useUserStore();
const user = computed(() => store.user);

const roleNames: Record<User['role'], string> = {
  admin: 'администратор',
  teacher: 'преподаватель',
};

watchEffect(() => console.log({ ...user.value?.certificates }));
</script>

<template>
  <h1 class="text-3xl">Профиль пользователя</h1>
  <hr class="max-w-xs my-6 border-red border-b-[3px]" />
  <div class="grid grid-cols-2" v-if="user">
    <div>
      <h2 class="text-2xl mb-4">Ваши данные</h2>
      <table>
        <tbody>
          <tr>
            <th class="min-w-[50%] py-2 text-pink text-left">Фамилия</th>
            <td>{{ user.lastName }}</td>
          </tr>
          <tr>
            <th class="min-w-[50%] py-2 text-pink text-left">Имя</th>
            <td>{{ user.firstName }}</td>
          </tr>
          <tr>
            <th class="min-w-[50%] py-2 text-pink text-left">Отчество</th>
            <td>{{ user.middleName }}</td>
          </tr>
          <tr>
            <th class="min-w-[50%] py-2 text-pink text-left">Должность</th>
            <td>{{ user.position }}</td>
          </tr>
          <tr>
            <th class="min-w-[50%] py-2 text-pink text-left">Роль</th>
            <td>{{ roleNames[user.role] }}</td>
          </tr>
          <tr>
            <th class="min-w-[50%] py-2 text-pink text-left">E-mail</th>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h2 class="text-2xl mb-4">Ваши сертификаты</h2>
    <table v-if="user">
      <thead>
        <th class="px-3">Название</th>
        <th class="px-3">Место прохождения</th>
        <th class="px-3">Начало обучения</th>
        <th class="px-3">Конец обучения</th>
        <th class="px-3">Дата выдачи</th>
        <th class="px-3">Файлы</th>
      </thead>
      <tbody>
        <tr v-for="cert in user.certificates">
          <td class="px-3">{{ cert.name }}</td>
          <td class="px-3">{{ cert.issuedBy }}</td>
          <td class="px-3">{{ cert.startDate }}</td>
          <td class="px-3">{{ cert.endDate }}</td>
          <td class="px-3">{{ cert.issuedDate }}</td>
          <td class="px-3">
            <a
              class="text-red"
              v-for="file in cert.files"
              :href="`/uploads/certificates/${file.name}`"
              target="_blank"
              >{{ file.name }}</a
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
    "requiresAuth": true
  }
}
</route>
