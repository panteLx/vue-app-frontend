<template>
  <div id="nav" class="">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <span v-if="isLoggedIn">
      <router-link :to="{ name: 'User' }">User</router-link> |
      <button @click="logOut">Logout</button>
    </span>
    <span v-else>
      <router-link :to="{ name: 'Register' }"> Register </router-link> |
      <router-link :to="{ name: 'Login' }"> Login </router-link>
    </span>
  </div>
  <router-view />
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
      isLoggedIn: true,
    };
  },

  created() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.isLoggedIn = true; // if we have a user
      } else {
        this.isLoggedIn = false; // if we do not
      }
    });
  },
  methods: {
    logOut() {
      signOut(getAuth()).then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>
