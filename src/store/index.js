import { createStore } from 'vuex'

const API_URL = 'http://localhost:8081';

export default createStore({
  state: {
    goodList: []
  },
  getters:{
    getGoodList(state){
      return [...state.goodList];
    }
  },
  mutations: {
    addGoodList(state, payload){
      state.goodList = [...payload];
    },
    addToGoodList(state, payload){
      state.goodList.push(payload);
    },
    removeFromGoodList(state, id){
      let index = state.goodList.findIndex((good) => id == good.product_id);
      state.goodList.splice(index, 1);
    }
  },
  actions: {
    fetchGoodList({commit}){
      return fetch(`${API_URL}/catalog`)
      .then((response)=>response.json())
      .then((data)=>{
        commit('addGoodList', data);
      })
    },
    addToGoodList({commit}, good){
      return fetch(`${API_URL}/catalog`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(good)
      })
      .then((response)=>{
        if(response.status == 200){
          commit('addToGoodList', good);
        }
      })

    },
    deleteFromeGoodList({commit}, id){
      return fetch(`${API_URL}/catalog/${id}`,{
        method: 'DELETE'
      })
      .then((response)=>{
        if(response.status == 200){
          commit('removeFromGoodList', id);
        }
      })
    }
  }
})