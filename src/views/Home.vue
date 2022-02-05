<template>
  <div class="home">
    <router-link class="text-3xl font-bold underline" :to="{ name: 'User' }"
      >User</router-link
    >
  </div>

  <div v-if="!success">
    <home-add-db-entry @getdata="getData" />
  </div>

  <div v-if="success">
    {{ id }}
    <div class="text-4xl">Published!</div>
    <button @click.prevent="successToggle">Back</button>
  </div>
</template>

<script>
import HomeAddDbEntry from "../components/Home/HomeAddDbEntry.vue";

export default {
  emits: ["getdata"],
  data() {
    return {
      id: 0,
      success: false,
    };
  },

  methods: {
    getData(value) {
      this.id = value.id;
      this.success = value.success;
    },

    successToggle() {
      this.$router.go();
    },
  },

  components: {
    HomeAddDbEntry,
  },
};
</script>
