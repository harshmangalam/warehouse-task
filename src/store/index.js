import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const BASE_URL = process.env.VUE_APP_BASE_URL

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    warehouses: [],

  },
  mutations: {
    SET_WAREHOUSES(state, payload) {
      state.warehouses = payload
    },
    UPDATE_WAREHOUSE(state, { id, data }) {
      let index = state.warehouses.findIndex(w => w.id == id)
      if (index !== -1) {
        state.warehouses[index] = data
      }
    }
  },
  actions: {
    async fetchWarehouses({ commit }) {
      try {
        const { data } = await axios.get(`${BASE_URL}/data/warehouses.json`)

        commit('SET_WAREHOUSES', data)
      } catch (err) {
        console.log(err)
      }
    },

    async submitWarehouse({ commit }, data) {
      commit("UPDATE_WAREHOUSE", data)
    }
  },

  getters: {
    getWarehouses(state) {
      return state.warehouses
    },
  }
})
