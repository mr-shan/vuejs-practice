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
  box-shadow: -5px -5px 10px #fff, 1px 1px 10px 0px #999;
  letter-spacing: 1px;
  border-radius: 4px;
  font-weight: 500;
  user-select: none;
}

.primary {
  background: #b9428b;
  color: white;
}

.secondary {
  background: #375bdd;
  color: white;
}

.secondary:hover {
  background: #5c75d1;
}

.primary:hover {
  background: #b4548f;
}

.primary:disabled {
  background: #aaa;
  pointer-events: none;
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