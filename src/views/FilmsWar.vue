<template>
   <div class="columns-3 text-center">
    
    <div>Error message: {{ errorMessage }}</div>
     <div class="columns-3">All Films: {{AllFilms}}</div>
  </div>
</template>

<script>
export default {
  name: "get-all-films",
  data() {
    return {
      AllFilms: null,
      errorMessage: null,
    };
  },
  async created() {
    // GET request using fetch with error handling
    fetch("https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&sort=year&range=1-20&byTags=franchise:Avengers&lang=da")
      .then(async (response) => {
        const data = await response.json();
        this.AllFilms = data.id;

        // check for error response
        if (!response.ok) {
          // get error message from  default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.AllFilms = data.entries;
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
};
</script>