import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Photography from "../views/Photography.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Brandi Abernathy | Front-end Developer",
    component: Home,
  },
  {
    path: "/photography",
    name: "Brandi Abernathy | Photography",
    component: Photography,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Photography.vue"),
  },
  {
    path: "/projects",
    name: "Brandi Abernathy | Projects",
    component: Projects,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
