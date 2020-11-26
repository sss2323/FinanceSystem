import Vue from "vue";
import vuex from "vuex";
import router from 'vue-router';

import utils from './utils/index';

declare module "vue/types/vue" {
  interface Vue {
    // readonly $store: Store;

    readonly $utils: utils;

    readonly $eventBus: Vue;
  }
}
