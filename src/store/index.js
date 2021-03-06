import { createStore } from "vuex";


import websocket from "./plugins/websocket";

export default new createStore({
  // export default createStore({
  // import Vue from "vue";
  // import Vuex from "vuex";
  // Vue.use(Vuex);

  // export default new Vuex.Store({
  plugins: [websocket()],
  state: {
    connected: false,
    error: null,
    dTxSignals: {},
    aTxSignals: {},
    sTxSignals: {},
    dRxSignals: {},
    aRxSignals: {},
    sRxSignals: {},
  },
  mutations: {
    storeDigitalSignal(state, { id, value }) {
      (state[state.dRxSignals] = id), value;
    },
    storeAnalogSignal(state, { id, value }) {
      (state[state.aRxSignals] = id), value;
    },
    storeSerialSignal(state, { id, value }) {
      (state[state.sRxSignals] = id), value;
    },

    sendDigitalSignal(state, { id, value }) {
      (state[state.dRxSignals] = id), value;
    },
    sendAnalogSignal(state, { id, value }) {
      (state[state.aTxSignals] = id), value;
    },
    sendSerialSignal(state, { id, value }) {
      (state[state.sTxSignals] = id), value;
    },

    SET_CONNECTION(state, message) {
      state.connected = message;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    storeDigitalSignal({ commit }, { id, value }) {
      commit("storeDigitalSignal", { id, value });
    },
    storeAnalogSignal({ commit }, { id, value }) {
      commit("storeAnalogSignal", { id, value });
    },
    storeSerialSignal({ commit }, { id, value }) {
      commit("storeSerialSignal", { id, value });
    },

    sendDigitalSignalHigh({ commit }, id) {
      commit("sendDigitalSignal", { id, value: true });
    },
    sendDigitalSignalLow({ commit }, id) {
      commit("sendDigitalSignal", { id, value: false });
    },

    sendAnalogSignal({ commit }, { id, value }) {
      commit("sendAnalogSignal", { id, value });
    },
    sendSerialSignal({ commit }, { id, value }) {
      commit("sendSerialSignal", { id, value });
    },

    connectionOpened({ commit }) {
      commit("SET_CONNECTION", true);
    },
    connectionClosed({ commit }) {
      commit("SET_CONNECTION", false);
    },
    connectionError({ commit }, error) {
      commit("SET_ERROR", error);
    },
  },
  modules: {},
});
