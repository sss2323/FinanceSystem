import Vue from 'vue';
import { session, local } from './storage';
import eventBus from './eventBus';

const utils = {
  session,
  local,
};

Vue.use({
  install(vue) {
    vue.prototype.$utils = utils;
    vue.prototype.$eventBus = eventBus;
  },
});
