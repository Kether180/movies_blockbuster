<template>
  <div class="detail font-mono text-lg">
    <div class="detail-view" v-if="show">
      <div v-if="film" class="image">
        <img :src="imageUrl + film.id + '.png'" alt="" />
      </div>
      <div v-if="film" class="data">
        <h2>{{ film.name }}</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">{{ pokemon.base_experience }} XP</div>
        </div>
        <div class="property">
          <div class="left">Height</div>
          <div class="right">{{ pokemon.height / 10 }} m</div>
        </div>
        <div class="property">
          <div class="left">Weight</div>
          <div class="right">{{ pokemon.weight / 10 }} kg</div>
        </div>
        <h3>Pokemon Types</h3>
        <div class="types">
          <div
            class="type"
            v-for="(value, index) in pokemon.types"
            :key="'value' + index"
          >
            {{ value.type.name }}
          </div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div
            class="ability"
            v-for="(value, index) in pokemon.abilities"
            :key="'value' + index"
          >
            {{ value.ability.name }}
          </div>
        </div>
      </div>

    
    </div>
  </div>
</template>

<script>
export default {
  props: ["filmsnUrl", "imageUrl"],
  data: () => {
    return {
      show: false,
      film: {},
    };
  },
  methods: {
    fetchData() {
      let req = new Request(this.filmsUrl);
      fetch(req)
        .then((resp) => {
          if (resp.status === 200) return resp.json();
        })
        .then((data) => {
          this.film = data;
          this.show = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeDetail() {
      this.$emit("closeDetail");
    },
  },
  created() {
    this.fetchData();
  },
};
</script>


<style scoped>
@import "@/index.css";
</style>
