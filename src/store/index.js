import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  // 存储数据
  state: {
    count: 8,
    list: [1, 3, 5, 7, 9, 11, 999],
  },
  // Vue computed中的计算函数。-->可以认为是 store 的计算属性
  getters: {
    filteredList: state => {
      return state.list.filter(item => item < 10);
    },
  },
  actions,
  mutations,
})