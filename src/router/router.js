import AllProductsPage from "@/pages/AllProductsPage.vue";
import AuthRegistrationPage from "@/pages/AuthRegistrationPage.vue";
import BasketPage from "@/pages/BasketPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import AboutUsPage from "@/pages/AboutUsPage.vue";
import DeliveryPage from "@/pages/DeliveryPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import LikedPage from "@/pages/LikedPage.vue";
import SearchResaltPage from "@/pages/SearchResaltPage.vue";
import AccountPage from "@/pages/AccountPage.vue";
import NotFoundComponent from "@/pages/NotFoundComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/products/:category",
    component: AllProductsPage,
  },
  {
    path: "/product/:id",
    component: ProductPage,
  },
  {
    path: "/basket",
    component: BasketPage,
  },
  {
    path: "/liked",
    component: LikedPage,
  },
  {
    path: "/authentification",
    component: AuthRegistrationPage,
  },
  {
    path: "/about",
    component: AboutUsPage,
  },
  {
    path: "/delivery",
    component: DeliveryPage,
  },
  {
    path: "/contacts",
    component: ContactsPage,
  },
  {
    path: "/account",
    component: AccountPage,
  },
  {
    path: "/search/:result?",
    component: SearchResaltPage,
  },

  {
    path: '/:pathMatch(.*)',
    component: NotFoundComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    return {
      top: 0,
    };
  },
});

// app.use(router);
export default router;
