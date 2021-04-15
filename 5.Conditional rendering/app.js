var appVue = Vue.createApp({
  el: "#app",
  data() {
    return {
      currentInput: "",
      goals: [],
    };
  },
  methods: {
    addButtonClickHandler() {
      if(this.currentInput.slice() !== "") {
        this.goals.push(this.currentInput);
      }
    },
    removeGoalHandler(goalIndex) {
      this.goals.splice(goalIndex, 1);
    }
  },
});

appVue.mount("#app");
