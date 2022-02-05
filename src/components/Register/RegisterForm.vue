<template>
  <form @submit.prevent="userRegistration">
    <div class="text-4xl">Sign Up</div>
    <div>
      <label>Name</label>
      <input type="text" v-model="user.name" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="user.email" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="user.password" />
    </div>
    <button type="submit">Sign Up</button>
    <p>
      Already registered
      <router-link :to="{ name: 'Login' }">sign in?</router-link>
    </p>
  </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userRegistration() {
      try {
        await createUserWithEmailAndPassword(
          getAuth(),
          this.user.email,
          this.user.password
        );
        this.$router.push({ name: "User" });
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style></style>
