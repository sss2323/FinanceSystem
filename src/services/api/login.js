// 登录相关接口

import fetch from '../../plugins/axios';

export default {
  post(params) {
    return fetch.post('/Home/Login', params);
  },
};
