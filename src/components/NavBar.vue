<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink class="nav_link" to="/">Home</RouterLink>
    <RouterLink class="nav_link" to="/counter">Counter</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
  nav {
  padding: 1rem;
}
a,
.green {
  font-size: 1.5rem;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s ease-in-out;
  margin-left: 1rem;
}

</style>

