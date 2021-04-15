var appVue = new Vue({
  el: "#app",
  data: {
    currentInput: "",
    extraHtml: "<p>This is nice work <a href='#'>Learn more</a></p>",
    todos: [],
  },
  methods: {
    getRandomString: function () {
      const randomNum = Math.random();
      if (randomNum < 0.5) return "The number is less than 0.5";
      else return "The number is greater than 0.5";
    },
    getLink: function() {
      return "https://vue.org"
    }
  },
});
