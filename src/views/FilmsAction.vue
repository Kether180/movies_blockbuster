<script setup></script>

<template>
  <main>
    <h1 class="text-center text-2xl">ACTION</h1>
    <br />
    <Films />
    <div class="columns-3">
      <img src="@/assets/batman.jpg" alt="Batman" class="movie-images" />
      <h2>The Batman</h2>
      <h2>Release Year</h2>
      <h2>Trailer</h2>

      <br />

      <img src="@/assets/matrix.jpg" alt="Matrix" class="movie-images" />
      <h2>Matrix Resurrection</h2>
      <h2>Release Year</h2>
      <h2>Trailer</h2>

      <br />

      <img src="@/assets/moonfall.jpg" alt="Moonfall" class="movie-images" />
      <h2>Moonfall</h2>
      <h2>Release Year</h2>
      <h2>Trailer</h2>

      <br />
    </div>
  </main>
</template>

<script>
import Films from "@/components/Films.vue";
export default {
  components: {
    Films,
  },
};
</script>

<style>
@import "@/index.css";
</style>
