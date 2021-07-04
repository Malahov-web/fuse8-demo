import Vue from "vue";
import Vuex from "vuex";
import estates from "@/store/modules/estates.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    estates,
  },
  state: {},
  mutations: {},
  actions: {},
});
