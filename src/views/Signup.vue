<template>
  <template v-if="!user"><signup-form /></template>
  <template v-else><err-access /></template>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ErrAccess from "../components/Error/ErrAccess.vue";
import SignupForm from "../components/Signup/SignupForm.vue";

export default {
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
    };
  },
  components: {
    ErrAccess,
    SignupForm,
  },
};
</script>
