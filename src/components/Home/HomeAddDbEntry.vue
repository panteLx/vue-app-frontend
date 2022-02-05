<template>
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
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  emits: ["getdata"],

  data() {
    return {
      v$: useValidate(),
      entry: "",
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
          this.$emit("getdata", { id: docRef.id, success: true });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
  },
};
</script>
