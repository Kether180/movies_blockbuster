<template>
  <main>
    <h1 class="text-center text-2xl">ACTION</h1>
    <br />
    <Films />
    <div class="columns-3">

      <img src="@/assets/avengers.jpg" alt="ae" class="movie-images" />
     
      <br />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
      <div class="grid grid-rows-10">
        <p>{{ errorMessage }} {{ FilmDescription }}</p>
      </div>

      <br />
       <img src="@/assets/moonfall.jpg" alt="Moonfall" class="movie-images" />
      <br />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
     <div class="grid grid-rows-10">
        <p>{{ errorMessage }} {{ FilmDescription }}</p>
      </div>

      <br />

      <img src="@/assets/matrix.jpg" alt="Matrix" class="movie-images" />
      <br />
      <h2>{{ errorMessage }} {{ FilmTitle }}</h2>
      <div class="grid grid-rows-10">
        <p>{{ errorMessage }} {{ FilmDescription }}</p>
      </div>

      <br />
 
    </div>
    <h2 class="text-2xl text-yellow-300">
      Summer Offer ! Buy now for 49,-/stk
    </h2>
  </main>
</template>

<script>
export default {
  name: "get-films-byId",
  data() {
    return {
      FilmTitle: null,
      FilmDescription: null,
      errorMessage: null,
    };
  },
  async created() {
    // GET request using fetch with error handling
    fetch(
      "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas/106608168011?form=json" // URL Get program by Id - testing

      /* "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json"*/ // Get Action Movies 2017 - testing
    )
      .then(async (response) => {
        const data = await response.json();
        this.FilmTitlte = data.id;
        this.FilmDescription = data.id;

        // check for error response
        if (!response.ok) {
          // get error message from  default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        this.FilmId = data.id;
        this.FilmTitle = data.title;
        this.FilmDescription = data.description;

        /* this.FilmEntries = data.entries; */
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
};
</script>

<style>
@import "@/index.css";
</style>
