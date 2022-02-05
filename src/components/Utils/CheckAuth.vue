<template>
  <p></p>
</template>

<script>
import { onAuthStateChanged, getAuth } from "firebase/auth";
export default {
  created() {
    onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        this.$router.push({ name: "Login" });
      }
    });
  },
};
</script>

<style></style>
