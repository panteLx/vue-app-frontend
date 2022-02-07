import { createStore } from "vuex";

// firebase imports
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },

    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },

  actions: {
    async signup(context, { email, password }) {
      console.log("signup action");

      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete signup");
      }
    },
    async login(context, { email, password }) {
      console.log("login action");

      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could not complete login");
      }
    },
    async logout(context) {
      console.log("logout action");

      await signOut(auth);
      context.commit("setUser", null);
    },

    async update(context, { name }) {
      console.log("update action");
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      } catch (e) {
        throw new Error("error update user" + e);
      }
    },

    async get() {
      console.log("get action");
      //TODO get shit
    },
  },

  getters: {
    userInfo(state) {
      return state.user;
    },
  },
});

// wait until auth is ready
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

// export the store
export default store;
