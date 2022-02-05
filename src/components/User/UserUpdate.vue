<template>
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
</template>

<script>
import { getAuth, updateProfile } from "firebase/auth";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  emits: ["getdata"],
  props: ["FetchUserData"],
  data() {
    return {
      v$: useValidate(),
      updateuser: {},
    };
  },
  validations() {
    return {
      updateuser: {
        name: { required },
      },
    };
  },

  methods: {
    async update() {
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        try {
          await updateProfile(getAuth().currentUser, {
            displayName: this.updateuser.name,
          });
          this.$emit("getdata", {
            success: true,
            name: this.updateuser.name,
          });

          // TODO call getData function on UserWelcome to refetch userdata
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style></style>
