/* eslint-disable */
const state = {
  funds: 10000,
  stocks: [],
};

const getters = {
  stockPortfolio(state, getters, rootState, rootGetters) {
    return state.stocks.map((stock) => {
      const record = rootGetters['stocks/stocks'].find(
        (element) => element.name == stock.name,
      );
      return {
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds: (state) => state.funds,
};

const mutations = {
  BUY_STOCK(state, { name, quantity, price }) {
    const record = state.stocks.find((element) => element.name == name);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        name,
        quantity,
      });
    }
    state.funds -= quantity * price;
  },
  SELL_STOCK(state, { name, quantity, price }) {
    const record = state.stocks.find((element) => element.name == name);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += quantity * price;
  },
};

const actions = {
  //购买按钮
  buyStock({ commit }, payload) {
    commit('BUY_STOCK', payload);
  },
  //卖出按钮
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
