<template>
  <header-custom />
  <badge-list />
  <user-info
    :full-name="activeUser.name"
    :full-text="activeUser.description"
    :role="activeUser.role"
  />
</template>

<script>
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import BadgeList from "./components/BadgeList";

const app = {
  components: {
    "header-custom": Header,
    "user-info": UserInfo,
    "badge-list": BadgeList,
  },
  data() {
    return {
      activeUser: {
        name: "Dev",
        description: "I'm a developer",
        role: "admin",
      },
    };
  },
};
export default app;
</script>

<style>
:root {
  --background: "#f00";
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

.white-box-neo {
  box-shadow: -12px -12px 20px #fff, 10px 10px 20px 0px #ccc;
  border-radius: 16px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  position: relative;
  animation: add-in 0.4s ease-out forwards;
}

.btn-primary {
  padding: 8px 12px;
  outline: none;
  background: #5773d8;
  color: white;
  font-size: 14px;
  border: solid 1px transparent;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: -2px -2px 10px #fff, 1px 1px 10px 0px #999;
  letter-spacing: 1px;
  border-radius: 4px;
  font-weight: 500;
}

.btn-primary:hover {
  background: #375bdd;
}

.btn-primary:disabled {
  background: #aaa;
  pointer-events: none;
}

.btn-ternery {
  background: transparent;
  box-shadow: none;
  color: #333;
  font-weight: bold;
  border: solid 1px #aaa;
  border-style: solid;
  outline: none;
}

.btn-ternery:hover {
  background: #ccc;
}

.badge-admin {
  background: #375bdd;
}

.badge-author {
  background: teal;
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
</style>