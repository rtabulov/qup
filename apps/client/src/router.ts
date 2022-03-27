import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import { useStore } from './store';
import { resolveAuthLevel } from './utils';

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach(async () => {
  const store = useStore();

  if (!store.initialLoadFinished) {
    await store.tryLoggingIn();
  }
});

router.beforeEach((to) => {
  const store = useStore();

  if (
    to.meta.requiresAuth &&
    !resolveAuthLevel(
      store.user?.role?.key,
      to.meta.requiresAuth as string | true,
    )
  ) {
    return `/login?backurl=${to.path}`;
  }
});

router.beforeEach((to, from) => {
  const store = useStore();

  if (to.meta.requiresGuest && store.user) {
    return from.name ? from.fullPath : '/profile';
  }
});

export default router;
