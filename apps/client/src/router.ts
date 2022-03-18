import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './store';
import routes from '~pages';

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach(async () => {
  const store = useUserStore();

  if (!store.initialLoadFinished) {
    await store.tryLoggingIn();
  }
});

router.beforeEach(async (to, from) => {
  const store = useUserStore();

  if (to.meta.requiresAuth && !store.user) {
    return `/login?backurl=${to.path}`;
  }
});

router.beforeEach(async (to, from) => {
  const store = useUserStore();

  if (to.meta.requiresGuest && store.user) {
    return from.name ? from.fullPath : '/';
  }
});

export default router;
