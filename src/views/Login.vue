<template>
  <div>
    <form @submit.prevent="userLogin">
      <div class="text-4xl">Sign In</div>
      <div>
        <label>Email address</label>
        <input type="email" v-model="user.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="user.password" />
      </div>
      <button type="submit">Sign In</button>
      <p>
        <router-link to="/">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userLogin() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then(() => {
          // Signed in
          this.$router.push({ name: "User" });
          // ...
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
