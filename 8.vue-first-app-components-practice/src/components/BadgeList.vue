<template>
  <base-card>
    <h3>Available roles</h3>
    <ul>
      <li>
        <badge-item type="admin" badge-name="ADMIN" />
      </li>
      <li>
        <badge-item type="author" badge-name="AUTHOR" />
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {};
</script>

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