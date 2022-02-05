<template>
  <div>
    <Test @id="getID" />

    {{ id }}
  </div>
</template>

<script>
import Test from "../views/Tests.vue";
export default {
  data() {
    return {
      id: 0,
    };
  },

  components: {
    Test,
  },

  methods: {
    getID(value) {
      this.id = value;
    },
  },
};
</script>

<style></style>
