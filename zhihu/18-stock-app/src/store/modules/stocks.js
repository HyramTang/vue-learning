const state = {
  stocks: [
    {
      name: 'Amazon - 亚马逊',
      price: 110,
    },
    {
      name: 'Google - 谷歌',
      price: 200,
    },
    {
      name: 'Apple - 苹果',
      price: 300,
    },
    {
      name: 'Microsoft - 微软',
      price: 50,
    },
  ],
};

const getters = {
  stocks: (state) => state.stocks,
};

const mutations = {
  RND_STOCKS(state) {
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
};

const actions = {
  //结束交易日按钮
  randomizeStocks({ commit }) {
    commit('RND_STOCKS');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
