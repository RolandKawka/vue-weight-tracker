import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    measurements: [],
  },
  mutations: {
    addMeasure(state, payload) {
      state.measurements.push(payload);
    },
  },
  actions: {
    addMeasure({ commit }, measure) {
      commit('addMeasure', measure);
    },
  },
});
