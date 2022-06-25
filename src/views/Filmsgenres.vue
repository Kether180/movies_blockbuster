<script setup></script>

<template>
  <main>
    <div class="columns-3">
      <h1 class="text-center text-2xl">FILMS</h1>
    </div>
    <br />
    <div class="columns-4 container mx-auto px-5">
      <img src="@/assets/batman.jpg" alt="Batman" class="movie-images" />
      <br />
      <RouterLink to="/filmsaction"><p>Action</p></RouterLink> <br />
      <h2>The Batman</h2>

      <br />
    </div>
    <br />
    <div class="columns-4 container mx-auto px-5">
      <img src="@/assets/vildmaend.jpg" alt="vilmaend" class="movie-images" />
      <br />
      <RouterLink to="/filmscomedy"><p>Comedy</p></RouterLink> <br />
      <h2>Vilmaend</h2>
      <br />
    </div>
    <br />
    <div class="columns-4 container mx-auto px-5">
      <img src="@/assets/love.jpg" alt="Redeeming" class="movie-images" />
      <br />
      <RouterLink to="/filmsromance"><p>Romance</p></RouterLink> <br />
      <h2>Redeeming Love</h2>

      <br />
    </div>
 
  </main>
</template>

<style>
@import "@/index.css";
</style>
