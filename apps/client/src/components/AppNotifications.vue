<script lang="ts" setup>
import { XIcon } from '@heroicons/vue/solid';
import { useNotificationsStore } from '../store/notifications-store';

const notifications = useNotificationsStore();
</script>

<template>
  <teleport to="body">
    <div class="w-80 fixed left-1/2 top-4 -translate-x-1/2 space-y-2">
      <div
        v-for="ntfcn in notifications.notifications"
        :key="ntfcn.id"
        class="w-full px-6 py-3 flex justify-between bg-opacity-75"
        :class="{
          'bg-white text-black': ntfcn.type === 'default',
        }"
      >
        <span class="block">{{ ntfcn.text }}</span>
        <button @click="notifications.remove(ntfcn.id)">
          <XIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </teleport>
</template>
