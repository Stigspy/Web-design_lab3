<template>
  <div>
    <h3>todo</h3>
    <hr />
    <router-link to="/">Home</router-link>
    <hr />
    <addTodo @add-todo="addTodo" />
    <loader v-if="loading"></loader>
    <todoList
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      v-else-if="todos.length"
    />
    <h1 v-else>Пусто!</h1>
  </div>
</template>

<script>
import todoList from "@/components/todo-list";
import addTodo from "@/components/addTodo";
import loader from "@/components/loader";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      });
  },
  components: {
    todoList,
    addTodo,
    loader,
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
};
</script>