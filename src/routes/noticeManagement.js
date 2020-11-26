// 公告管理
import System from '../views/noticeManagement/Index';
import Member from '../views/noticeManagement/Member';
import Handle from '../views/noticeManagement/system/Handle';
import Check from '../views/noticeManagement/system/Check';
import Publish from '../views/noticeManagement/member/Publish';

export default [
  {
    path: '/notice-management',
    name: 'notice-management',
    component: System,
  },
  {
    path: '/notice-management/handle',
    component: Handle,
  },
  {
    path: '/notice-management/check',
    component: Check,
  },
  {
    path: '/member-notice',
    name: 'member-notice',
    component: Member,
  },
  {
    path: '/member-notice/publish',
    component: Publish,
  },
];
