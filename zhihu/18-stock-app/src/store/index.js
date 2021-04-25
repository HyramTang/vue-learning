/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import { getData, saveData } from "../utils/data";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    SAVE_DATA(state, payload) {
      saveData(JSON.stringify({
        stocks: state.stocks.stocks,
        funds: state.portfolio.funds,
        portfolioStocks: state.portfolio.stocks
      }))
    },
    LOAD_DATA(state) {
      var savedData = getData();
      if (savedData) {
        savedData = JSON.parse(savedData);
        state.stocks.stocks = savedData.stocks;
        state.portfolio.stocks = savedData.portfolioStocks;
        state.portfolio.funds = savedData.funds;
      }
    },
  },
  actions: {
    saveData({ commit }, payload) {
      commit('SAVE_DATA', payload)
    },
    loadData({ commit }) {
      commit('LOAD_DATA');
    },
  },
  modules: {
    stocks,
    portfolio,
  },
});
