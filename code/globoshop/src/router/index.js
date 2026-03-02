import { createRouter, createWebHistory } from 'vue-router';
import ItemsList from '@/views/ItemsList.vue';
import AboutPage from '@/views/AboutPage.vue';

const routes = [
  {
    path: '/items',
    name: 'ItemsList',
    component: ItemsList,
    alias: '/'
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
