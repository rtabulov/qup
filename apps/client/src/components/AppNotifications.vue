<script lang="ts" setup>
import { XIcon } from '@heroicons/vue/solid';
import { useNotificationsStore } from '../store/notifications-store';

const notifications = useNotificationsStore();
</script>

<template>
  <teleport to="body">
    <div class="fixed right-4 bottom-4 w-80 space-y-2">
      <div
        v-for="ntfcn in notifications.notifications"
        :key="ntfcn.id"
        class="flex w-full justify-between bg-opacity-90 px-6 py-3"
        :class="{
          'bg-black text-white': ntfcn.type === 'default',
        }"
      >
        <span class="block">{{ ntfcn.text }}</span>
        <button @click="notifications.remove(ntfcn.id)">
          <XIcon class="h-5 w-5" />
        </button>
      </div>
    </div>
  </teleport>
</template>
