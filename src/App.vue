<template>
  <!-- Navigation-->

  <!--Logo -->
<header> 
  <img
    class="object-contain h-20 w-30"
    alt="Vue logo"
    src="@/assets/blockbuster-logo.jpg"
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
  
  <body>
    <HomeBlockbuster />
  </body>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import HomeBlockbuster from "@/components/HomeBlockbuster.vue";

export default {
  components: {
    HomeBlockbuster,
  },
};
</script>

<style>
@import "@/index.css";
</style>
