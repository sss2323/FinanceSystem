module.exports = {
  productionSourceMap: false,
  configureWebpack(config) {
    config.devtool = 'eval';
  },
  // 设置代理服务器，避免本地访问提示跨越
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.***.com',
      },
    },
  },
};
