import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
  },
  state: {
    value: 0,
  },
  getters,
  mutations,
  actions,
});
