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
  box-shadow: 15px 15px 20px #181818, -10px -10px 16px #2f2f2f;
  border-radius: 16px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  position: relative;
  animation: add-in 0.4s ease-out forwards;

  color: #ccc;
  font-size: 16px;
  text-align: left;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>