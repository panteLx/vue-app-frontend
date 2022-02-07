<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </div>
    <!-- for logged in users -->
    <div v-if="user">
      <span>Logged in as {{ user.email }}</span>
      <router-link :to="{ name: 'User' }">User</router-link>
      <button @click="handleClick">Logout</button>
    </div>
    <!-- for logged out users -->
    <div v-if="!user">
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Signup' }">Signup</router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const handleClick = () => {
      store.dispatch("logout");
    };

    return {
      handleClick,
      user: computed(() => store.state.user),
    };
  },
};
</script>
