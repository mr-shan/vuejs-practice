import { createRouter, createWebHistory } from "vue-router";

import TheReviews from "./components/TheReviews";
import TheForm from "./components/TheForm";
import TheReview from "./components/TheReview";
import NotFound from "./components/NotFound";

import AddReviewFooter from "./components/UI/Footers/AddReviewFooter";
import ViewReviewFooter from "./components/UI/Footers/ViewReviewFooter";

import UserList from "./components/UserList";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/add-review",
      components: {
        "footer-route": AddReviewFooter,
        default: TheForm,
      },
      name: "add-review-form",
    },
    {
      path: "/reviews",
      components: {
        "footer-route": ViewReviewFooter,
        default: TheReviews,
      },
      children: [
        {
          path: "/reviews/:username",
          params: [":username"],
          component: TheReview,
          props: true,
        },
      ],
      name: "review-list",
    },
    {
      path: "/users",
      component: UserList,
    },
    {
      path: "/",
      redirect: "/reviews",
    },
    {
      path: "/:anything(.*)",
      component: NotFound,
    },
  ],
  linkActiveClass: "active",
});

export default router;
