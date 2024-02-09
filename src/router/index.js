import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelpPage from "../views/HelpPage.vue";
import AboutView from "../views/AboutView.vue";
import BlogPage from "@/views/BlogPage.vue";
import CreatePost from "@/views/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/write-blog",
    name: "write-blog",
    component: CreatePost,
  },
  {
    path: "/blogs-page",
    name: "blogs-page",
    component: BlogPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    // path is the name of the component or the page you made
    // component is the name of the page you made
    path: "/help-page",
    name: "help-page",
    component: HelpPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
