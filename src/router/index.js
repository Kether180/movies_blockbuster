import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Filmsgenres from "../views/Filmsgenres.vue";
import Seriesgenre from "../views/Seriesgenre.vue";
import FilmsAction from "../views/FilmsAction.vue";
import FilmsComedy from "../views/FilmsComedy.vue";

import FilmsRomance from "../views/FilmsRomance.vue";

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
      path: "/filmsromance",
      name: "filmsromance",
      component: FilmsRomance,
    },
  ],
});

export default router;
