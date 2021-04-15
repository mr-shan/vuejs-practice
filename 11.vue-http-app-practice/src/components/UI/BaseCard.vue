<template>
  <section>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot name="default"></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  box-shadow: -12px -12px 20px #fff, 10px 10px 20px 0px #ccc;
  border-radius: 16px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  position: relative;
  animation: add-in 0.4s ease-out forwards;

  color: white;
  font-size: 16px;
  color: #333;
  text-align: left;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
}
</style>