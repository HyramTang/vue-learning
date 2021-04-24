import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import('../views/Stocks.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
