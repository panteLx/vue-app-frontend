<template>
  <div>
    <ul v-for="post in posts" v-bind:key="post.id">
      <li class="font-bold">{{ post.title }}</li>
      <p>{{ post.body }}</p>
    </ul>
    <div v-if="error" class="text-red-600 font-bold text-center p-4">
      <ErrConn />
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ErrConn from "../Errors/ErrConn.vue";
export default {
  created() {
    this.getData();
  },

  data() {
    return {
      posts: [],
      error: "",
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(process.env.VUE_APP_BACKEND_API);
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
  },
  components: {
    ErrConn,
  },
};
</script>
