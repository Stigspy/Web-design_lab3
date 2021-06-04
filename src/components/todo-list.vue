<template>
  <div>
    <ul>
      <item
        v-bind:todo="todo"
        v-for="(todo, i) of todos"
        :key="todo"
        v-on:remove-todo="removeTodo"
        v-bind:index="i"
      />
    </ul>
  </div>
</template>

<script>
import item from "@/components/todoItem";
export default {
  props: ["todos"],
  components: {
    item,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
