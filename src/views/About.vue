<template>
  <div>
    <ul v-for="post in posts" v-bind:key="post.id">
      <li class="font-bold">{{ post.title }}</li>
      <p>{{ post.body }}</p>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
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
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>
