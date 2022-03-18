<script lang="ts" setup>
import { computed } from 'vue';
import { useUserStore } from '../../store';
import { User } from '../../types';

const store = useUserStore();
const user = computed(() => store.user);

const roleNames: Record<User['role'], string> = {
  admin: 'администратор',
  teacher: 'преподаватель',
};
</script>

<template>
  <h1 class="text-3xl">Профиль пользователя</h1>
  <hr class="max-w-xs my-6 border-red border-b-[3px]" />
  <div class="grid grid-cols-2">
    <div>
      <h2 class="text-2xl mb-4">Ваши данные</h2>
      <table v-if="user">
        <tbody>
          <tr>
            <td class="min-w-[50%] py-2 text-pink">Фамилия</td>
            <td>{{ user.lastName }}</td>
          </tr>
          <tr>
            <td class="min-w-[50%] py-2 text-pink">Имя</td>
            <td>{{ user.firstName }}</td>
          </tr>
          <tr>
            <td class="min-w-[50%] py-2 text-pink">Отчество</td>
            <td>{{ user.middleName }}</td>
          </tr>
          <tr>
            <td class="min-w-[50%] py-2 text-pink">Должность</td>
            <td>{{ user.position }}</td>
          </tr>
          <tr>
            <td class="min-w-[50%] py-2 text-pink">Роль</td>
            <td>{{ roleNames[user.role] }}</td>
          </tr>
          <tr>
            <td class="min-w-[50%] py-2 text-pink">E-mail</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h2 class="text-2xl mb-4">Ваши сертификаты</h2>
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
