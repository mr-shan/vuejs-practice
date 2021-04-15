<template>
  <base-card>
    <base-card>
      <h3>Add new user</h3>
      <form @submit.prevent="addUser">
        <input v-model="inputText" type="text" />
        <base-button mode="secondary">Add</base-button>
      </form>
    </base-card>

    <base-card>
      <h3>User List</h3>
      <!-- <ul> -->
      <transition-group tag="ul" name="user-list">
        <li
          :style="{ '--order': index + 1 }"
          v-for="(user, index) in users"
          :key="user"
          @click="removeUser(user)"
        >
          {{ user }}
        </li>
      </transition-group>
      <!-- </ul> -->
    </base-card>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      users: ["Shantanu", "Alex"],
      inputText: "",
    };
  },
  methods: {
    addUser() {
      if (this.inputText.trim() !== "") {
        this.users.unshift(this.inputText.trim());
        this.inputText = "";
      }
    },
    removeUser(username, val) {
      console.log(username, val);
      this.users = this.users.filter((e) => e !== username);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
  padding: 1rem 0;
}

li {
  border: solid 1px #ccc;
  border-radius: 5px;
  margin: 0;
  margin-bottom: 5px;
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  position: relative;
  transition: all 0.2s ease-out;
}

.animation-list-items {
  animation: list-in 0.5s ease-out forwards;
  animation-delay:calc(var(--order) * 75ms);
  opacity: 0;
}

li:hover {
  border-color: #999;
  transition: all 0.2s ease-out;
}

li::after {
  content: "";
  position: absolute;
  font-size: 12px;
  font-weight: 400;
  top: 17px;
  transition: all 0.5s ease-out;
  right: 10px;
  color: red;
}

li:hover::after {
  content: "Remove";
  transition: all 0.5s ease-out;
}

h3 {
  text-align: center;
  margin-top: 1rem;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  margin-right: 10px;
  width: 100%;
}

button {
  width: 100px;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-10%);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 0.6s ease-in;
  transition-duration: 0.6s !important;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(10%);
}

.user-list-move {
  transition: all 0.8s ease;
}
</style>