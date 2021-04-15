// v-on: -> @     e.g. v-on:click="increment" -> @click="increment"
// v-bind: -> :   e.g. v-bind:value="counter" -> :value="counter"

var appVue = new Vue({
  el: "#app",
  data: {
    counter: 0,
    counterChangeValue: 1
  },
  methods: {
    increment() {
      this.counter = this.counter + this.counterChangeValue;
    },
    decrement: function () {
      this.counter = this.counter - this.counterChangeValue;
    },
    inputChangeHandler(event, value) {
      console.log(value);
      this.counterChangeValue = parseInt(event.target.value);
    },
  },
});

var appVue2 = new Vue({
  el: "#app2",
  data: {
    currentName: "",
    confirmedName: "",
    currentNameHtml: "",
    style: "color: blue"
  },
  methods: {
    inputChangeHandler(event) {
      this.currentName = event.target.value;
    },
    confirmInputHandler() {
      this.confirmedName = this.currentName;
      this.currentName = "";
    },
  },
  computed: {
    confirmationMessage() {
      return this.currentName === "" ? "" : "*Please press enter to confirm";
    },
  },
  watch: {
    currentName(newValue, oldValue) {
      if (newValue === "") {
        this.currentNameHtml = "";
      } else {
        this.currentNameHtml =
          'Current Name: <span style="color: #42b983;">' + newValue + "</span>";
      }
    },
  },
});
