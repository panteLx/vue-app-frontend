<template>
  <div class="root">
    <h2>Create an Account</h2>
    <input type="text" placeholder="Email" v-model="email" />
    <!-- -->
    <input type="password" placeholder="Password" v-model="password.password" />
    <!-- -->
    <input
      type="password"
      placeholder="Confirm Password"
      v-model="password.confirm"
    />
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  methods: {
    submitForm() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        console.log("Form successfully submitted.");
        this.$emit("id", 11);
      } else {
        alert("Form failed validation");
      }
    },
  },

  data() {
    return {
      v$: useValidate(),
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    };
  },
  validations() {
    return {
      email: { required },
      password: {
        password: { required },
        confirm: { required },
      },
    };
  },
};
</script>
