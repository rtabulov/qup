import { defineStore } from 'pinia';
import { User } from '../types/index';

export const useUserStore = defineStore('todos', {
  state: () => ({
    user: null as User | null,
  }),

  actions: {
    logout() {
      // you can directly mutate the state
      this.user = null;
    },
    setUser(user: User) {
      this.user = user;
    },
  },
});
