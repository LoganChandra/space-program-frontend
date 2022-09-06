import { createStore } from "vuex";

// Modules
import api from "./api.module.js";

export default createStore({
  modules: { api },
  plugins: [],
});
