import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/introduce',
  },
  {
    path: '/',
    name: 'menu',
    component: (resolve) =>
      require(['@/view/components/layout/TheHome.vue'], resolve),
    children: [
      {
        path: '/loading',
        name: 'loading',
        component: (resolve) => require(['@/view/pages/Loading.vue'], resolve),
        meta: { title: 'loading' },
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: (resolve) =>
          require(['@/view/pages/Introduce.vue'], resolve),
        meta: { title: '设计模式介绍' },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
