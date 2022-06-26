<script setup></script>

<template>
  <main>
    <h1 class="text-center text-2xl text-white">
      TOP BEST FILMS & SERIES 2022
    </h1>

    <p class="text-yellow-300 text-xl">
      <br />

      Buy and rent your premiere movies on Blockbuster. Denmark's largest
      selection, over 12,000 films. Find us on web, TV, mobile, tablet and more.
    </p>

    <br />
    <div class="columns-3">
      <img src="@/assets/matrix.jpg" alt="Matrix" class="movie-images" />
      <br />
      <RouterLink to="/filmsaction"><p>Action</p></RouterLink> <br />

      <img src="@/assets/vildmaend.jpg" alt="vilmaend" class="movie-images" />
      <br />
      <RouterLink to="/filmscomedy"><p>Comedy</p></RouterLink> <br />

      <img src="@/assets/smageafsult.jpg" alt="Smagen" class="movie-images" />
      <br />
      <RouterLink to="/filmsromance"><p>Romance</p></RouterLink> <br />

      <img src="@/assets/gold.jpg" alt="gold" class="movie-images" />
      <br />
      <RouterLink to="/filmsthriller"><p>Thriller</p></RouterLink> <br />

      <img src="@/assets/skyggenimitoje.jpg" alt="øje" class="movie-images" />
      <br />
      <RouterLink to="/filmswar"><p>War</p></RouterLink> <br />

      <img src="@/assets/druk.jpg" alt="druk" class="movie-images" />
      <br />
      <RouterLink to="/filmsdrama"><p>Drama</p></RouterLink> <br />
    </div>
  </main>
</template>

<script>
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
