<template>
  <nav>
    <ul>
      <li><router-link to="/add-review">Add Review</router-link></li>
      <li><router-link to="/reviews">View Reviews</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  border-radius: 16px;
  color: white;
  box-shadow: -6px -6px 10px #fff, 10px 10px 20px 0px #ccc;
  margin-top: 1rem;
  padding: 4px;
}

ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  list-style: none;
}

li {
  display: inline-block;
  margin: 0 2px;
}

a {
  text-decoration: none;
  color: #333;
  display: inline-block;
  padding: 10px 16px;
  font-weight: bold;
  transition: all 0.3s ease-out;
  position: relative;
  box-sizing: border-box;
  user-select: none;
}

a::after {
  content: "";
  width: 0;
  background: #375bdd;
  height: 3px;
  margin: auto;
  margin-top: 4px;
  display: block;
  position: absolute;
  border-radius: 500px;
  margin: auto;
  left: 0;
  right: 0;
  margin-top: 5px;
  transition: all 0.3s;
}

a.active::after {
  width: 85%;
}

a:hover::after {
  width: 85%;
}

@keyframes underline-in {
  from {
    width: 0%;
  }
  to {
    width: 85%;
  }
}
</style>