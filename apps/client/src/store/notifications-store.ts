import { defineStore } from 'pinia';
import { AppNotification } from '../types';
import { nanoid } from 'nanoid';

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    notifications: [] as AppNotification[],
  }),

  actions: {
    create({
      text,
      type = 'default',
      autoRemove = true,
    }: Partial<AppNotification> & { text: string; autoRemove?: boolean }) {
      const ntfcn = { text, type, id: nanoid() };

      this.notifications.push(ntfcn);

      if (autoRemove) {
        window.setTimeout(() => this.remove(ntfcn.id), 10_000);
      }
    },
    remove(id: string) {
      const idx = this.notifications.findIndex((n) => n.id === id);
      if (idx >= 0) {
        this.notifications.splice(idx, 1);
      }
    },
  },
});
