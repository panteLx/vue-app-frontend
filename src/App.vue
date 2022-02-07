<template>
  <template v-if="authIsReady">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </template>
</template>

<script>
import Navbar from "./components/Navbar";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    return {
      authIsReady: computed(() => store.state.authIsReady),
    };
  },

  components: { Navbar },
};
</script>
