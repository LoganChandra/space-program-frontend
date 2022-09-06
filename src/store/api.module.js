import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  actions: {
    async get(context, payload) {
      let result = await axios
        .get(process.env.API_URL + "/" + payload.route)
        .catch((err) => err);
      console.log("API result", result)
      if (result && result.status != 200) {
        return result.data || {};
      }

      return result.data || [];
    }
  },
  getters: {
    get(state) {
      return state.endDate;
    },
  },
};
