<template>
  <base-card style="text-align: center; padding-bottom: 1rem">
    <h1 class="primary">{{ $store.getters.getCounter }}</h1>
    <p>{{ $store.getters.normalizedCounter }}</p>
    <h2>The counter</h2>
    <br />
    <base-button mode="primary" style="margin: 0.5rem" @click="addOne">Increment</base-button>
    <base-button mode="secondary" style="margin: 0.5rem" @click="reduceOne">
      Decrement
    </base-button>
    <base-button
      style="margin: 0.5rem"
      :disabled="updateProgress"
      @click="addOneGradually"
    >
      Increment Gradually
    </base-button>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      updateProgress: false,
    };
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      this.$store.commit("increment", 1);
    },
    reduceOne() {
      this.$store.commit("decrement", 1);
      // this.$store.state.counter--;
    },
    addOneGradually() {
      this.updateProgress = true;
      setTimeout(() => (this.updateProgress = false), 2000);
      this.$store.dispatch("incrementGradually");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
}

body {
  background: #202020;
  margin: 2rem;
}

:root {
  --color-primary: #b9428b;
  --color-secondary: #375bdd;
  --color-ligth-1: #eee;
  --color-light-2: #ccc;
  --color-dark-1: #202020;
}

.primary {
  color: var(--color-primary);
}

.bg-primary {
  background: var(--color-primary);
}

.secondary {
  color: var(--color-secondary);
}

.bg-secondary {
  background: var(--color-secondary);
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 18px;
}
</style>
