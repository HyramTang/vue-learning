import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import User from "../components/user/User.vue";
import UserStart from "../components/user/UserStart.vue";
import UserDetail from "../components/user/UserDetail.vue";
import UserEdit from "../components/user/UserEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: User
    // () =>
    //   import(/* webpackChunkName: "user" */ "../components/user/User.vue")
    ,
    children: [
      {
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'UserEdit'
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
