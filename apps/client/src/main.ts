import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import App from './App.vue';
import './index.css';

import routes from '~pages';

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
