<template>
  <!-- Navigation-->

  <!--Logo -->
  <header>
    <img
      class="object-contain h-20 w-30"
      alt="Vue logo"
      src="@/assets/blockbuster.jpg"
    />
  </header>
  <!-- Navbar Router links -->
  <nav>
    <p>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/films">Films</RouterLink>
      <RouterLink to="/series">Series</RouterLink>
    </p>
  </nav>

  <body></body>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {},
};
</script>

<style>
@import "@/index.css";
</style>
