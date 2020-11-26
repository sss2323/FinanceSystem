// **设置
import Game from '../views/gameSettings/Index.vue';
import Room from '../views/gameSettings/Room.vue';

export default [
  { // **管理
    path: '/game-settings',
    name: 'game-settings',
    component: Game,
  },
  { // 房间管理
    path: '/room-settings',
    name: 'room-settings',
    component: Room,
  },
];
