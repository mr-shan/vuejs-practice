<template>
  <base-button style="margin-left: 16px" mode="secondary" @click="modalOpen = true"
    >Open Modal 2</base-button
  >
  <base-dialog2 :open="modalOpen" @close="modalOpen = false">
    <template v-slot:header>
      <h3 style="margin: 0">Modal 2</h3>
    </template>
    <p>Animation testing for modals</p>
  </base-dialog2>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>

<style scoped>

</style>