<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { BanIcon, CheckCircleIcon } from '@heroicons/vue/outline';
import {
  getInactiveUsers,
  getAllUsers,
  removeUser,
  updateUser,
} from '../../api';
import type { User, Role } from '../../types';
import { useNotificationsStore } from '../../store/notifications-store';
import AppSelect from '../../components/AppSelect.vue';
import { useStore } from '../../store';
import AppTable from '../../components/AppTable.vue';
import AppTableRow from '../../components/AppTableRow.vue';
import AppTableHeader from '../../components/AppTableHeader.vue';

const users = ref<User[]>([]);
const inactiveUsers = ref<User[]>([]);
const notifications = useNotificationsStore();

const refetchUsers = async () => {
  await Promise.all([
    getAllUsers().then((u) => (users.value = u)),
    getInactiveUsers().then((u) => (inactiveUsers.value = u)),
  ]);
};

refetchUsers();

const store = useStore();

async function onChangeActive(id: string, active: boolean) {
  await updateUser(id, { active });
  await refetchUsers();
  notifications.create({
    text: active ? `Пользователь активирован` : `Пользователь деактивирован`,
  });
}

async function onUpdateUserRole(userId: string, roleId: string) {
  try {
    await updateUser(userId, { roleId });
    await refetchUsers();

    notifications.create({ text: `Роль изменена` });
  } catch {
    notifications.create({ text: `Действие запрещено`, type: 'danger' });
  }
}
</script>

<template>
  <AppTable>
    <template #head>
      <AppTableHeader>ФИО</AppTableHeader>
      <AppTableHeader>Роль</AppTableHeader>
      <AppTableHeader>Удалить</AppTableHeader>
    </template>

    <AppTableRow v-for="user in [...inactiveUsers, ...users]">
      <td class="px-4">
        {{ user.lastName }} {{ user.firstName }} {{ user.middleName }}
      </td>
      <td class="px-4 py-3">
        <!-- @ts-ignore -->
        <AppSelect
          class="mt-0"
          :options="store.roles"
          :disabled="user.id === store.user?.id"
          :model-value="user.role?.id"
          :get-label="(role: Role) => role.name"
          :get-value="(role: Role) => role.id"
          @update:model-value="(newRole) => onUpdateUserRole(user.id, newRole)"
        />
      </td>
      <td class="px-4 text-right">
        <button
          v-if="store.user?.id !== user.id"
          class="transition-colors hover:text-blue"
          @click="onChangeActive(user.id, !user.active)"
        >
          <template v-if="user.active">
            Деактивировать
            <BanIcon class="inline h-6 w-6 align-middle" />
          </template>
          <template v-else>
            Активировать
            <CheckCircleIcon class="inline h-6 w-6 align-middle" />
          </template>
        </button>
        <span v-else>Ваш аккаунт</span>
      </td>
    </AppTableRow>
  </AppTable>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": "admin"
  }
}
</route>
