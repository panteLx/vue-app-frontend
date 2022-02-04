import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Tests from "../views/Tests.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/tests",
    name: "Tests",
    component: Tests,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
