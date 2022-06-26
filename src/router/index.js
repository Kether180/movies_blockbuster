import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Filmsgenres from "../views/Filmsgenres.vue";
import Seriesgenre from "../views/Seriesgenre.vue";
import FilmsAction from "../views/FilmsAction.vue";
import FilmsComedy from "../views/FilmsComedy.vue";
import FilmsRomance from "../views/FilmsRomance.vue";
import FilmsThriller from "../views/FilmsThriller.vue";
import FilmsWar from "../views/FilmsWar.vue";
import FilmsDrama from "../views/FilmsDrama.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/films",
      name: "films",
      component: Filmsgenres,
    },
    {
      path: "/series",
      name: "series",
      component: Seriesgenre,
    },
    {
      path: "/filmsthriller",
      name: "filmsthriller",
      component: FilmsThriller,
    },
    {
      path: "/filmsaction",
      name: "filmsaction",
      component: FilmsAction,
    },
    {
      path: "/filmscomedy",
      name: "filmscomedy",
      component: FilmsComedy,
    },
    {
      path: "/filmsdrama",
      name: "filmsdrama",
      component: FilmsDrama,
    },

    {
      path: "/filmsromance",
      name: "filmsromance",
      component: FilmsRomance,
    },
    {
      path: "/filmswar",
      name: "filmswar",
      component: FilmsWar,
    },
  ],
});

export default router;
