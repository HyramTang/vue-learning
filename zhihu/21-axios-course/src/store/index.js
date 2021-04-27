/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {},
  actions: {
    signup({ commit }, authData) {
      axios
        .post(
          '/api/users.json',
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          },
        )
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    login({ commit }, authData) {
      axios.get('/api/users.json',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => console.log('返回了', res))
        .catch(error => console.log(error));
    }
  },
  modules: {},
});
