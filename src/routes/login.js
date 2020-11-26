// 登录相关
import Login from '../views/Login.vue';

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      auth: false,
    },
    component: Login,
  },
];
