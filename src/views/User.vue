<template>
  <div>
    <div class="text-4xl">Welcome</div>
    <p>{{ user.uid }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.displayName }}</p>
  </div>

  <div v-if="!success">
    <div class="text-4xl">Update User</div>
    <span v-if="v$.updateuser.name.$error">
      {{ v$.updateuser.name.$errors[0].$message }}
    </span>
    <form @submit.prevent="update">
      <div>
        <label>Name</label>
        <input type="text" v-model="updateuser.name" />
      </div>
      <div>
        <button>Update User</button>
      </div>
    </form>
  </div>

  <div v-if="success">
    <div class="text-4xl">Published!</div>
  </div>

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
import ErrConn from "../components/ErrConn.vue";
import axios from "axios";
import { onAuthStateChanged, getAuth, updateProfile } from "firebase/auth";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useValidate(),
      user: "",
      updateuser: {},
      posts: [],
      error: "",
      success: false,
    };
  },

  validations() {
    return {
      updateuser: {
        name: { required },
      },
    };
  },

  created() {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        //logged in
        this.user = user;
      } else {
        //logged out
        this.$router.push({ name: "Login" });
      }
    });

    this.getData();
  },
  methods: {
    async update() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        try {
          await updateProfile(getAuth().currentUser, {
            displayName: this.updateuser.name,
          });
          this.success = true;
        } catch (error) {
          console.log(error);
        }
      }
    },

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
