<template>
  <div class="home">
    <router-link class="text-3xl font-bold underline" :to="{ name: 'User' }"
      >User</router-link
    >
  </div>

  <div v-if="!success">
    <div class="text-4xl">Add DB Entry</div>
    <span v-if="v$.entry.$error">
      {{ v$.entry.$errors[0].$message }}
    </span>
    <form @submit.prevent="add">
      <div>
        <label>Name</label>
        <input type="text" v-model="entry" />
      </div>
      <div>
        <button>Add Entry</button>
      </div>
    </form>
  </div>

  <div v-if="success">
    <div>{{ id }}</div>
    <div class="text-4xl">Published!</div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useValidate(),
      entry: "",
      id: "",
      success: false,
    };
  },

  validations() {
    return {
      entry: { required },
    };
  },

  methods: {
    async add() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        try {
          const docRef = await addDoc(collection(getFirestore(), "users"), {
            name: this.entry,
          });
          this.id = docRef.id;
          console.log("Document written with ID: ", docRef.id);
          this.success = true;
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
  },
};
</script>
