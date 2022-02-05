<template>
  <check-auth />

  <user-welcome />

  <div v-if="!success">
    <user-update @getdata="getData" />
  </div>

  <div v-if="success">
    <div class="text-4xl">Published!</div>
  </div>

  <!--  <user-posts /> -->
</template>

<script>
/* import UserPosts from "../components/User/UserPosts.vue"; */
import UserWelcome from "../components/User/UserWelcome.vue";
import UserUpdate from "../components/User/UserUpdate.vue";
import CheckAuth from "../components/Utils/CheckAuth.vue";

export default {
  data() {
    return {
      success: false,
    };
  },

  methods: {
    getData(value) {
      this.success = value.success;
      // TODO Add username emit
    },
  },
  components: {
    UserWelcome,
    UserUpdate,
    CheckAuth,
    /*     UserPosts, */
  },
};
</script>
