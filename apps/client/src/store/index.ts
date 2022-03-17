import { defineStore } from 'pinia';
import { User } from '../types/index';

export const useUserStore = defineStore('todos', {
  state: () => ({
    user: null as User | null,
    initialLoadFinished: false,
  }),

  actions: {
    logout() {
      // you can directly mutate the state
      this.user = null;
    },
    setUser(user: User) {
      this.user = user;
    },

    async tryLoggingIn() {
      try {
        this.user = await fetch('/api/auth/self').then((res) => res.json());
      } catch {
        this.user = null;
      } finally {
        this.initialLoadFinished = true;
      }
    },
  },
});
