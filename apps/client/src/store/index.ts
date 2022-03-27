import { defineStore } from 'pinia';
import { User, Role } from '../types';
import { getSelf, logout, fetchRoles } from '../api';

export const useStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    initialLoadFinished: false,
    roles: [] as Role[],
  }),

  actions: {
    async fetchRoles() {
      this.roles = await fetchRoles();
    },
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
