import Vue from 'vue';
import VueRouter from 'vue-router';

import WelcomePage from '../components/welcome/welcome.vue';
import DashboardPage from '../components/dashboard/dashboard.vue';
import SignupPage from '../components/auth/signup.vue';
import SigninPage from '../components/auth/signin.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage },
];

const router = new VueRouter({
  routes,
});

export default router;
