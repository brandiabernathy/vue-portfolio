import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Photography from "../views/Photography.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/photography",
    name: "Photography",
    component: Photography,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Photography.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

export default router;
