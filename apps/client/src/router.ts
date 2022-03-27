import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import { useUserStore } from './store';
import { resolveAuthLevel } from './utils';

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

router.beforeEach((to) => {
  const store = useUserStore();

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
  const store = useUserStore();

  if (to.meta.requiresGuest && store.user) {
    return from.name ? from.fullPath : '/profile';
  }
});

export default router;
