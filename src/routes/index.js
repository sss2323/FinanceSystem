import Vue from 'vue';
import Router from 'vue-router';
import { session } from '../utils/storage';

import Layout from '../views/Layout.vue';

import login from './login';
import home from './home';
import gameSettings from './gameSettings';
import accountManagement from './accountManagement';
import financialManagement from './financialManagement';
import noticeManagement from './noticeManagement';
import reportMangement from './reportMangement';
import riskControlOperation from './riskControlOperation';
import systemSettings from './systemSettings';
import logManagement from './logManagement';
import notFound from './404';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...login,
    {
      path: '/',
      component: Layout,
      children: [
        ...home,
        ...gameSettings,
        ...accountManagement,
        ...financialManagement,
        ...noticeManagement,
        ...reportMangement,
        ...riskControlOperation,
        ...systemSettings,
        ...logManagement,
        ...notFound,
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = session.get('user');
  if (to.meta.auth !== false && !isLogin) {
    next({ name: 'login' });
  } else if (isLogin && to.name === 'login') {
    next({ name: 'home' });
  }
  next();
});

export default router;
