export default [
  {
    title: '首页',
    titleIcon: 'ios-home',
    children: [
      { title: '系统首页', to: '/' },
      // { title: '系统首页', to: '/game-settings' },
    ],
  },
  {
    title: '账户管理',
    titleIcon: 'ios-contact',
    children: [
      {
        title: '用户管理',
        to: '/account/userManagement',
      },
      // { title: '用户银行卡管理', to: '/account-management/bank' },
      // { title: '推广设置', to: '/account-management/popularize' },
    ],
  },
  {
    title: '交易账单录入',
    titleIcon: 'md-grid',
    children: [
      {
        title: '交易账单录入',
        // to: '/notice-management',
        to: '/account/noteTypeIn',
        children: [{ title: '取款' }, { title: '系统存入' }],
      },
    ],
  },
  {
    title: '交易账单审核',
    titleIcon: 'md-hand',
    children: [
      { title: '交易账单审核', to: '/account/noteCheck',
      },
    ],
  },
  {
    title: '交易明细报表',
    titleIcon: 'ios-paper-outline',
    children: [
      { title: '交易明细报表', to: '/account/detailNote',
      },
    ],
  },
  {
    title: '交易流水报表',
    titleIcon: 'md-pulse',
    children: [
      { title: '交易流水报表', to: '/account/transactionFlowReport',
      },
    ],
  },
  {
    title: '银行卡流水报表',
    titleIcon: 'ios-card',
    children: [
      { title: '银行卡流水报表', to: '/account/bankCardFlowReport',
      },
    ],
  },
  {
    title: '货币账户报表',
    titleIcon: 'md-clipboard',
    children: [
      { title: '货币账户报表', to: '/account/currencyUserReport',
      },
    ],
  },
  // {
  //   title: '公告管理',
  //   children: [
  //     {
  //       title: '系统公告',
  //       to: '/notice-management',
  //       children: [
  //         { title: '添加公告', to: '/notice-management/handle' },
  //         { title: '编辑公告', to: '/notice-management/handle' },
  //         { title: '查看公告', to: '/notice-management/check' },
  //       ],
  //     },
  //     {
  //       title: '会员消息',
  //       to: '/member-notice',
  //       children: [
  //         { title: '发布消息', to: '/member-notice/publish' },
  //       ],
  //     },
  //   ],
  // },
  {
    title: '系统设置',
    titleIcon: 'ios-cog',
    children: [
      // { title: '参数设置', to: '/system-settings' },
      // { title: '域名设置', to: '/system-settings/domain' },
      // { title: '后台账户管理', to: '/system-settings/account' },
      { title: '管理员列表', to: '/system-settings/authority' },
      { title: '部门和权限设置', to: '/account/DepartmentAuthority' },
      { title: '系统设置', to: '/account/Set' },
      // { title: '银行管理', to: '/system-settings/bank' },
      // { title: '后台IP白名单', to: '/system-settings/whitelist' },
    ],
  },
];
