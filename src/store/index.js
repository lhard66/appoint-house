import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 8,
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    decrease (state, n = 1) {
      state.count -= n;
    },
  }
})