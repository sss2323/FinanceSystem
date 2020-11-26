// 需要配置host: 10.10.24.239 chesscardapi.com

import axios from 'axios';
import codes from '../const/code';

const instance = axios.create({
  baseURL: '/api',
  timeout: 60000,
});

instance.interceptors.request.use(config => {
  if (config.method === 'get') {
    config.params = Object.assign(config.params || {}, { _: Date.now() });
  }
  return config;
});

instance.interceptors.response.use(response => {
  response.data.Info = codes[String(response.data.Code)];
  response.data.Status = response.data.Code === 1;
  return response.data;
});

const fetch = {
  axios: instance,
  Axios: axios,
  get(url, params) {
    return instance.get(url, { params });
  },
  post() {
    return instance.post.apply(instance, arguments);
  },
};

export default fetch;
