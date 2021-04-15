<template>
  <the-header />
  <the-form />
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheForm from "./components/TheForm";

const app = {
  components: {
    "the-header": TheHeader,
    "the-form": TheForm,
  },
};
export default app;
</script>

<style>
:root {
  --color-main: "#375bdd";
}
body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1.5rem;
  margin: 0;
  box-sizing: border-box;
  max-width: 800px;
  margin: auto;
  background: #f0f0f0;
}

@keyframes add-in {
  from {
    transform: translateY(-10%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in {
  from {
    transform: translateY(-30%);
    opacity: 0.2;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>