var appVue = new Vue({
  el: "#app",
  data: {
    currentInput: "This is current value",
    todos: [],
  },
  methods: {
    addTodo: function () {
      this.todos.push(this.currentInput);
      this.currentInput = "";
    },
  },
});
