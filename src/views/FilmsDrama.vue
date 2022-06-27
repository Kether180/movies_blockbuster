<script setup></script>

<template>
  <main>
    <h1 class="text-center text-2xl">Drama</h1>
    <br />
    <div class="columns-3">
      <img src="@/assets/druk.jpg" alt="Druk" class="movie-images" />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
      <h2>{{ errorMessage }} {{ FilmDescription }}</h2>

      <br />

      <img src="@/assets/fatherstu.jpg" alt="Fa" class="movie-images" />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
      <h2>{{ errorMessage }} {{ FilmDescription }}</h2>

      <br />

      <img src="@/assets/ajournal.jpg" alt="journal" class="movie-images" />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
      <h2>{{ errorMessage }} {{ FilmDescription }}</h2>

      <br />
    </div>
    <h2 class="text-2xl text-yellow-300">
      Summer Offer ! Buy now for 49,-/stk
    </h2>
  </main>
</template>

<style>
@import "@/index.css";
</style>
