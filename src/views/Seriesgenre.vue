<script setup></script>

<template>
  <main>
    <Series />
    <h1 class="text-center text-2xl text-white">BEST SERIES IN SCANDINAVIA</h1>
    <p class="text-yellow-300 text-xl">
      <br />
      Rent your premiere series on Blockbuster. Denmark's has the largest
      selection. Find us on web, TV, mobile, tablet and more.
    </p>
    <br />
    <div class="columns-3">
      <img
        src="@/assets/startupserier.jpg"
        alt="Startup"
        class="movie-images"
      />
      <br />
      <h2>Start Up</h2>
      <br />
      <img src="@/assets/westworld.jpg" alt="west" class="movie-images" />
      <br />
      <h2>West World</h2>
      <img src="@/assets/nobelserier.jpg" alt="Nobels" class="movie-images" />
      <br />
      <h2>Nobels</h2>
      <br />
      <img src="@/assets/originals.jpg" alt="Originals" class="movie-images" />
      <br />
      <h2>The Originals</h2>
      <br />
      <img src="@/assets/borge.jpg" alt="Borge" class="movie-images" />
      <br />
      <h2>Borgen 3</h2>
      <br />
      <img src="@/assets/100season.jpg" alt="100" class="movie-images" />
      <br />
      <h2>The 100</h2>
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
