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
      {
        path: '/decorate',
        name: 'decorate',
        redirect: '/decorate/demo1',
        component: (resolve) =>
          require(['@/view/pages/decorate/Index.vue'], resolve),
        meta: { title: '装饰者模式' },
        children: [
          {
            path: '/decorate/demo1',
            name: 'decorateDemo1',
            component: (resolve) =>
              require(['@/view/pages/decorate/Demo1.vue'], resolve),
            meta: { title: '装饰者模式Demo1', nav: 'decorate' },
          },
          {
            path: '/decorate/demo2',
            name: 'decorateDemo2',
            component: (resolve) =>
              require(['@/view/pages/decorate/Demo2.vue'], resolve),
            meta: { title: '装饰者模式Demo2', nav: 'decorate' },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
