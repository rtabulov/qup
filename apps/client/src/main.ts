import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import './index.css';

import routes from '~pages';

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

createApp(App).use(router).mount('#app');
