<template>
  <ul>
    <li v-for="item in items" :key="item">
      <badge-item :type="item" :badge-name="item.toUpperCase()" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
</style>