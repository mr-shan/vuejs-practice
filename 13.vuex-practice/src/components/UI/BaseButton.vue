<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    mode: String,
  },
};
</script>

<style scoped>
button {
  padding: 8px 12px;
  outline: none;
  font-size: 14px;
  border: solid 1px transparent;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: -3px -3px 8px #333, 2px 2px 10px 0px #161616;
  letter-spacing: 1px;
  border-radius: 4px;
  font-weight: 500;
  user-select: none;
  background: #444;
  color: #ccc;
  transition: all 0.2s ease-out;
}

button:hover {
  background: #555;
}

button:disabled {
  pointer-events: none;
  background: #333;
  color: #555;
  box-shadow: none;
}

.primary {
  background: var(--color-primary);
  color: white;
}

.secondary {
  background: #375bdd;
  color: white;
}

.secondary:hover {
  background: #5c75d1;
}

.secondary:disabled,
.primary:disabled {
  background: #333;
  color: #666;
  pointer-events: none;
}

.primary:hover {
  background: #b4548f;
}

.ternery {
  background: transparent;
  box-shadow: none;
  color: #333;
  font-weight: bold;
  border: solid 1px #aaa;
  border-style: solid;
  outline: none;
}

.ternery:hover {
  background: #ccc;
}

.flat {
  background: none;
  border: solid 1px transparent;
  box-shadow: none;
}

.flat:hover {
  background: #b9428b;
  color: white;
}
</style>