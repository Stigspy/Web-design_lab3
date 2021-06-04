<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />

    <button class="add">Добавить</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.$store.state.count);
      const newTodo = {
        id: Date.now(),
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);
    },
  },
};
</script>
