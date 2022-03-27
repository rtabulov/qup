<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { TrashIcon } from '@heroicons/vue/outline';
import { getAllUsers, removeUser, updateUser } from '../../api';
import type { User, Role } from '../../types';
import { useNotificationsStore } from '../../store/notifications-store';
import AppSelect from '../../components/AppSelect.vue';
import { useStore } from '../../store';

const users = ref<User[]>([]);
const notifications = useNotificationsStore();

const refetchUsers = () => getAllUsers().then((u) => (users.value = u));

refetchUsers();

const store = useStore();

async function onRemove(id: string) {
  await removeUser(id);
  await refetchUsers();
  notifications.create({ text: `Пользователь удалён` });
}

async function onUpdateUserRole(userId: string, roleId: string) {
  await updateUser(userId, { roleId });
  await refetchUsers();

  notifications.create({ text: `Роль изменена` });
}
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <th>ФИО</th>
        <th>Роль</th>
        <th>Удалить</th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="user in users" class="py-3">
        <td class="px-4">
          {{ user.lastName }} {{ user.firstName }} {{ user.middleName }}
        </td>
        <td class="px-4">
          <!-- @ts-ignore -->
          <AppSelect
            :options="store.roles"
            :disabled="user.id === store.user?.id"
            :model-value="user.role?.id"
            :get-label="(role: Role) => role.name"
            :get-value="(role: Role) => role.id"
            @update:model-value="
              (newRole) => onUpdateUserRole(user.id, newRole)
            "
          />
        </td>
        <td class="px-4 text-center">
          <button
            class="hover:text-red transition-colors"
            @click="onRemove(user.id)"
          >
            <TrashIcon class="w-6 h-6" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": "admin"
  }
}
</route>
