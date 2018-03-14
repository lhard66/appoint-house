import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  // 存储数据
  state: {
    count: 8,
    list: [1, 3, 5, 7, 9, 11, 999],
  },
  getters,
  actions,
  mutations,
})