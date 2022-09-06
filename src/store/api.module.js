import axios from "axios";
let API_URL = "https://space-program-pi-calc.herokuapp.com"
export default {
  namespaced: true,
  state() {
    return {};
  },
  mutations: {},
  actions: {
    async get(context, payload) {
      console.log("GET REQUEST - ", API_URL + '/' + payload.route)
      let result = await axios
        .get(API_URL + '/' + payload.route)
        .catch((err) => err);
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
