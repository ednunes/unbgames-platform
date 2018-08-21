import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Game from "./views/Game.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/game/:gameId",
      name: "game",
      component: Game,
      props: route => {
        return { gameId: Number(route.params.gameId) };
      }
    }
  ]
});
