// v-on: -> @     e.g. v-on:click="increment" -> @click="increment"
// v-bind: -> :   e.g. v-bind:value="counter" -> :value="counter"

var appVue = Vue.createApp({
  data: () => {
    return {
      background: "white"
    };
  },
  methods: {
    colorBoxClickHandler(newBackground) {
      this.background = newBackground;
      document.querySelector('body').style.background = newBackground;
    }
  },
});

appVue.mount("#app");
