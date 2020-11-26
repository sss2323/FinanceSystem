// **管理相关接口

import fetch from '../../plugins/axios';

export default {
  GetChessGameList(params) { // 获取****列表
    return fetch.get('/GameManager/GetChessGameList', params);
  },
  UpdateChessGameSort(params) { // 更新**排序
    return fetch.post('/GameManager/UpdateChessGameSort', params);
  },
  UpdateChessGameStatus(params) { // 更新**状态
    return fetch.post('/GameManager/UpdateChessGameStatus', params);
  },
  GetChessGameRoomList(params) { // 获取**房间列表
    return fetch.get('/GameManager/GetChessGameRoomList', params);
  },
  UpdateChessRoomConfig(params) { // 更新**房间(场)基础参数
    return fetch.post('/GameManager/UpdateChessRoomConfig', params);
  },
  UpdateChessRoomStatus(params) { // 更新**房间(场)状态
    return fetch.post('/GameManager/UpdateChessRoomStatus', params);
  },

};
