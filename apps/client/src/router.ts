import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './store';
import routes from '~pages';

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach(async (to, from) => {
  const store = useUserStore();

  if (to.meta.requiresAuth && store.initialLoadFinished && !store.user) {
    return from.name ? from.fullPath : '/';
  }

  if (to.meta.requiresAuth && !store.initialLoadFinished) {
    await store.tryLoggingIn();

    if (!store.user) {
      return `/login?backurl=${from.path}`;
    }
  }
});

router.beforeEach(async (to, from) => {
  const store = useUserStore();

  if (to.meta.requiresGuest && store.initialLoadFinished && store.user) {
    return from.name ? from.fullPath : '/';
  }

  if (to.meta.requiresGuest && !store.initialLoadFinished) {
    await store.tryLoggingIn();

    if (store.user) {
      return from.name ? from.fullPath : '/';
    }
  }
});

export default router;
