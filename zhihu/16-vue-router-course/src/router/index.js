import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Header from '../components/Header.vue';
import UserStart from '../components/user/UserStart.vue';
import UserDetail from '../components/user/UserDetail.vue';
import UserEdit from '../components/user/UserEdit.vue';
/*eslint-disable*/

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      'header-top': Header,
    },
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: User,
    components: {
      //这里会预加载：Prefetch
      default: () => import(/* webpackChunkName: "user" */ "../components/user/User.vue"),
      'header-bottom': Header,
    },
    children: [
      {
        path: '',
        component: UserStart,
      },
      {
        path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'UserEdit',
      },
    ],
  },
  {
    path: '/redirect-me',
    redirect: { name: 'Home' },
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "404" */ '../components/404.vue'),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  next();
});

export default router;
