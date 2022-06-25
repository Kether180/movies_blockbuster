<script setup></script>

<template>
  <main>
    <Series />
    <h1 class="text-center text-2xl">SERIES</h1>
    <br />
    <div class="columns-3">
      <img src="@/assets/startupserier.jpg" alt="Startup" class="movie-images" />
      <h2>Start Up</h2>
      <h2>Release Year</h2>
      <h2>Trailer</h2>

      <br />

      <img src="@/assets/westworld.jpg" alt="west" class="movie-images" />
      <h2>West World</h2>
      <h2>Release Year</h2>
      <h2>Trailer</h2>

      <br />

      <img src="@/assets/nobelserier.jpg" alt="Nobels" class="movie-images" />
      <h2>Nobels</h2>
      <h2>Release Year</h2>
      <h2>Trailer</h2>

      <br />
    </div>
  </main>
</template>

<script>
import Series from "@/components/Series.vue";
export default {
  components: {
    Series,
  },
};
</script>


<style>
@import "@/index.css";
</style>
