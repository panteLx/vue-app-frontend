<template>
  <template v-if="user">
    <user-info :user="user['displayName']" />
    <user-update />
  </template>
  <template v-else><err-access /></template>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ErrAccess from "../components/Error/ErrAccess.vue";
import UserInfo from "../components/User/UserInfo.vue";
import UserUpdate from "../components/User/UserUpdate.vue";

export default {
  setup() {
    const store = useStore();
    return {
      user: computed(() => store.getters.userInfo),
    };
  },
  components: {
    ErrAccess,
    UserInfo,
    UserUpdate,
  },
};
</script>
