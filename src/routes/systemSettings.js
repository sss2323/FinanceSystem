// 系统设置
import SystemSetting from '../views/systemSettings/Index';
import Domain from '../views/systemSettings/Domain';
import Account from '../views/systemSettings/Account';
import Authority from '../views/systemSettings/Authority';
import Bank from '../views/systemSettings/Bank';
import WhiteList from '../views/systemSettings/WhiteList';

export default [
  {
    path: '/system-settings',
    name: 'system-settings',
    component: SystemSetting,
  },
  {
    path: '/system-settings/domain',
    component: Domain,
  },
  {
    path: '/system-settings/account',
    component: Account,
  },
  {
    path: '/system-settings/authority',
    component: Authority,
  },
  {
    path: '/system-settings/bank',
    component: Bank,
  },
  {
    path: '/system-settings/whitelist',
    component: WhiteList,
  },
];
