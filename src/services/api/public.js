// 公共相关接口

import fetch from '../../plugins/axios';

export default {
  GetCompanyHomeView(params) {
    // return fetch.get('/GameManager/GetChessGameList', params);
    return fetch.get('/Common/GetCompanyHomeView', params);
  },
};
