<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h3>{{ title }}</h3>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <base-button @click="$emit('close')" mode="primary">Close</base-button
          >>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "Warning",
    },
  },
  emits: ["close"],
};
</script>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 10px;
  border: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-shadow: -3px -3px 10px #999, 5px 5px 10px #222;
  text-align: left;
  animation: slide-in 0.3s ease-out forwards;
}

div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

header {
  background: #b4548f;
  color: white;
  padding: 1rem;
}

header h3 {
  margin: 0;
}

section {
  padding: 1rem;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50%-20rem);
    width: 40rem;
  }
}
</style>