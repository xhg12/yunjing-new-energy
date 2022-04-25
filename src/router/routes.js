export default [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "layout" */ '../views/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "home" */ '../views/user/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "home" */ '../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "home" */ '../views/register/index.vue')
  }
]
