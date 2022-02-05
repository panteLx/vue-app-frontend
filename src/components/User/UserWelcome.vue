<template>
  <div class="text-4xl">Welcome</div>
  <p>{{ user.uid }}</p>
  <p>{{ user.email }}</p>
  <p>{{ user.displayName }}</p>
</template>

<script>
import { onAuthStateChanged, getAuth } from "firebase/auth";

export default {
  data() {
    return {
      user: "",
    };
  },
  created() {
    this.getData();
  },

  methods: {
    async getData() {
      try {
        await onAuthStateChanged(getAuth(), (user) => {
          if (user) {
            this.user = user;
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
