/* eslint-disable */
import { createWebHistory, createRouter } from "vue-router";

// pages
import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;