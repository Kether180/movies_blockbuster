<script setup></script>

<template>
  <main>
    <h1 class="text-center text-2xl">WAR</h1>
    <br />
    <div class="columns-3">
      <img
        class="object-cover h-50 w-100"
        src="@/assets/naturallight.jpg"
        alt="Light"
      />
      <br />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
      <h2>{{ errorMessage }} {{ FilmDescription }}</h2>

      <br />

      <img src="@/assets/recon.jpg" alt="Recon" class="movie-images" />
      <br />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
      <h2>{{ errorMessage }} {{ FilmDescription }}</h2>

      <br />

      <img
        src="@/assets/skyggenimitoje.jpg"
        alt="tagminhaand"
        class="movie-images"
      />
      <br />
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
