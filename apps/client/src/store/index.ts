import { defineStore } from 'pinia';
import { User } from '../types/index';
import { getSelf, logout } from '../api';

export const useUserStore = defineStore('todos', {
  state: () => ({
    user: null as User | null,
    initialLoadFinished: false,
  }),

  actions: {
    async logout() {
      // you can directly mutate the state
      await logout();
      this.user = null;
    },
    setUser(user: User) {
      this.user = user;
    },

    async tryLoggingIn() {
      try {
        this.user = await getSelf();
      } catch {
        this.user = null;
      } finally {
        this.initialLoadFinished = true;
      }
    },
  },
});
