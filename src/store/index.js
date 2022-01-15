import {
  createStore
} from 'vuex'

const API_URL = 'http://localhost:8081';

export default createStore({
  state: {
    goodList: [],
    defaultGoodList: []
  },
  getters: {
    getGoodList(state) {
      return [...state.goodList];
    }
  },
  mutations: {
    addGoodList(state, payload) {
      state.goodList = [...payload];
      state.defaultGoodList = [...payload];
    },
    addToGoodList(state, payload) {
      state.goodList.unshift(payload);
    },
    removeFromGoodList(state, id) {
      let index = state.goodList.findIndex((good) => id == good.product_id);
      state.goodList.splice(index, 1);
    },
    sortGoodListBy(state, sortBy) {
      switch (sortBy) {
        case "default":
          state.goodList = [...state.defaultGoodList];
          break;
        case "name":
          state.goodList.sort(function (a, b) {
            let x = (a.product_name) ? a.product_name.toLowerCase() : "";
            let y = (b.product_name) ? b.product_name.toLowerCase() : "";
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          })
          break;
        case "min":
          state.goodList.sort(function (a, b) {
            return Number(a.product_price.toString().replace(/\s/g, "")) < Number(b.product_price.toString().replace(/\s/g, "")) ? 1 : -1;
          })
          break;
        case "max":
          state.goodList.sort(function (a, b) {
            return Number(a.product_price.toString().replace(/\s/g, "")) > Number(b.product_price.toString().replace(/\s/g, "")) ? 1 : -1;
          })
          break;
      }
    }
  },
  actions: {
    fetchGoodList({
      commit
    }) {
      return fetch(`${API_URL}/catalog`)
        .then((response) => response.json())
        .then((data) => {
          commit('addGoodList', data);
        })
    },
    addToGoodList({
      commit
    }, good) {
      return fetch(`${API_URL}/catalog`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(good)
        })
        .then((response) => {
          if (response.status == 200) {
            commit('addToGoodList', good);
          }
          return response.status;
        })

    },
    deleteFromeGoodList({
      commit
    }, id) {
      return fetch(`${API_URL}/catalog/${id}`, {
          method: 'DELETE'
        })
        .then((response) => {
          if (response.status == 200) {
            commit('removeFromGoodList', id);
          }
        })
    },
    sortGoodsList({
      commit
    }, sortBy) {
      commit('sortGoodListBy', sortBy);
    },
  }
})