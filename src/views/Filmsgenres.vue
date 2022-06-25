<script setup></script>

<template>
  <main>
    <h1 class="text-center text-2xl text-white">BEST FILMS EVER</h1>

    <p class="text-yellow-300 text-xl">
      <br />

      Buy and rent your premiere movies on Blockbuster. Denmark's largest
      selection, over 12,000 films. Find us on web, TV, mobile, tablet and more.
    </p>

    <br />
    <div class="columns-3">
      <img src="@/assets/batman.jpg" alt="Batman" class="movie-images" />
      <br />
      <RouterLink to="/filmsaction"><p>Action</p></RouterLink> <br />
      <h2>The Batman</h2>

      <br />

      <img src="@/assets/vildmaend.jpg" alt="vilmaend" class="movie-images" />
      <br />
      <RouterLink to="/filmscomedy"><p>Comedy</p></RouterLink> <br />
      <h2>Vilmaend</h2>

      <br />

      <img src="@/assets/love.jpg" alt="Redeeming" class="movie-images" />
      <br />
      <RouterLink to="/filmsromance"><p>Romance</p></RouterLink> <br />
      <h2>Redeeming Love</h2>
      
      <br />

      <img src="@/assets/love.jpg" alt="Redeeming" class="movie-images" />
      <br />
      <RouterLink to="/filmsromance"><p>Thriller</p></RouterLink> <br />
      <h2>Redeeming Love</h2>
      
      <br />

      <img src="@/assets/love.jpg" alt="Redeeming" class="movie-images" />
      <br />
      <RouterLink to="/filmsromance"><p>War</p></RouterLink> <br />
      <h2>Redeeming Love</h2>
      
      <br />

      <img src="@/assets/love.jpg" alt="Redeeming" class="movie-images" />
      <br />
      <RouterLink to="/filmsromance"><p>Drama</p></RouterLink> <br />
      <h2>Redeeming Love</h2>

      <br />
    </div>
  </main>
</template>

<style>
@import "@/index.css";
</style>
