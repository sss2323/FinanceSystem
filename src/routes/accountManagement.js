// 钱庄记账管理
import Index from '../views/account/Index.vue';
import Add from '../views/account/Add.vue';
import Edit from '../views/account/Edit.vue';
import Synopsis from '../views/account/Synopsis.vue';
import BankIndex from '../views/account/bankCard/Index.vue';
import PopularizeIndex from '../views/account/popularize/Index.vue';
import userManagement from '../views/account/userManagement.vue';
import noteCheck from '../views/account/noteCheck.vue';
import detailNote from '../views/account/detailNote.vue';
import transactionFlowReport from '../views/account/transactionFlowReport.vue';
import bankCardFlowReport from '../views/account/bankCardFlowReport.vue';
import currencyUserReport from '../views/account/currencyUserReport.vue';
import noteTypeIn from '../views/account/noteTypeIn.vue';
import DepartmentAuthority from '../views/account/DepartmentAuthority.vue';
import set from '../views/account/Set.vue';

export default [
  {
    path: '/account-management/index',
    name: 'account-management',
    component: Index,
  },
  {
    path: '/account-management/add',
    component: Add,
  },
  {
    path: '/account-management/edit',
    component: Edit,
  },
  {
    path: '/account-management/synopsis',
    component: Synopsis,
  },
  {
    path: '/account-management/bank',
    component: BankIndex,
  },
  {
    path: '/account-management/popularize',
    component: PopularizeIndex,
  },
  {
    path: '/account/userManagement',
    component: userManagement,
  },
  {
    path: '/account/detailNote',
    component: detailNote,
  },
  {
    path: '/account/noteCheck',
    component: noteCheck,
  },
  {
    path: '/account/transactionFlowReport',
    component: transactionFlowReport,
  },
  {
    path: '/account/bankCardFlowReport',
    component: bankCardFlowReport,
  },
  {
    path: '/account/currencyUserReport',
    component: currencyUserReport,
  },
  {
    path: '/account/noteTypeIn',
    component: noteTypeIn,
  },
  {
    path: '/account/DepartmentAuthority',
    component: DepartmentAuthority,
  },
  {
    path: '/account/set',
    component: set,
  },
];
