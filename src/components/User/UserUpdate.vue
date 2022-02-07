<template>
  <div class="text-4xl">Update User</div>
  <!--   <span v-if="v$.name.$error">
    {{ v$.name.$errors[0].$message }}
  </span> -->
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <button>Update User</button>
    </div>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const name = ref("");
    const error = ref(null);

    const store = useStore();

    const handleSubmit = async () => {
      try {
        await store.dispatch("update", {
          name: name.value,
        });
      } catch (err) {
        error.value = err.message;
      }
    };

    return { handleSubmit, name, error };
  },
};
</script>
