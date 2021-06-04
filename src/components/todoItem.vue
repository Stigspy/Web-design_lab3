<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}.</strong>
      {{ uppercaseTitle }}</span
    >
    <button v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  computed: {
    uppercaseTitle() {
      return this.todo.title.toUpperCase();
    },
  },
};
</script>



<style scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin: 0.5rem;
  border: solid 2px #ccc;
  transition: 0.3s;
}
li:hover {
  background-color: rgb(163, 163, 241);
}
button {
  border-radius: 50%;
  background-color: red;
  color: white;
}
.checked {
  checked: true;
}
.done {
  text-decoration: line-through;
}
</style>