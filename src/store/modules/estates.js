import EstateServices from "@/services/EstateServices.js";

export default {
  state: {
    estates: [],
    estatesSearched: [],
    searchStatus: false,
  },

  getters: {
    getEstates: (state) => {
      return state.estates;
    },

    getEstatesSearched: (state) => {
      return state.estatesSearched;
    },

    getSearchStatus: (state) => {
      return state.searchStatus;
    },
  },

  mutations: {
    SET_ESTATES(state, estates) {
      state.estates = estates;
    },

    SET_ESTATES_SEARCHED(state, estatesSearched) {
      state.estatesSearched = estatesSearched;
    },

    RESET_ESTATES_SEARCHED(state) {
      state.estatesSearched = [];
    },

    SET_SERCH_STATUS(state, searchStatus) {
      state.searchStatus = searchStatus;
    },
  },

  actions: {
    fetchEstates({ commit }) {
      EstateServices.getEstates().then((response) => {
        commit("SET_ESTATES", response.data);
        console.log("News has been fetched:", response);
      });
    },

    searchEstates({ commit, state }, { inputText }) {
      let estates = state.estates;

      let result = estates.filter((item) =>
        item.title.toLowerCase().includes(inputText.toLowerCase())
      );
      commit("SET_ESTATES_SEARCHED", result);
    },

    resetSearchedEstates({ commit }) {
      commit("RESET_ESTATES_SEARCHED");
    },

    setSearchStatus({ commit }, searchStatus) {
      commit("SET_SERCH_STATUS", searchStatus);
    },
  },
};
