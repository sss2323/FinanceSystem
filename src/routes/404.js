// 路由未匹配到就会跳到此路由
import NotFound from '../views/NotFound.vue';

export default [
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    beforeEnter(to, from, next) {
      to.params.url = from.fullPath;
      next();
    },
  },
];
