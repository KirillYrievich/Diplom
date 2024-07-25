<template>
  <HeaderComp />
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
  <FooterComp />
</template>

<script>
import MainPage from "./pages/MainPage.vue";
import AllProductsPage from "./pages/AllProductsPage.vue";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import ProductPage from "./pages/ProductPage.vue";
import BasketPage from "./pages/BasketPage.vue";
import AuthRegistrationPage from "./pages/AuthRegistrationPage.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MainPage,
    AllProductsPage,
    HeaderComp,
    FooterComp,
    ProductPage,
    BasketPage,
    AuthRegistrationPage,
  },
  created() {
    this.getSortedProducts({
      commitName: "addCardsInNewProducts",
      sortParametr: "id",
      startIndex: 0,
      endIndex: 18,
    });
    this.getSortedProducts({
      commitName: "addCardsInMostRatedProducts",
      sortParametr: "rating",
      startIndex: 0,
      endIndex: 18,
    });
    this.getSortedProducts({
      commitName: "addCardsInRecomendProducts",
      sortParametr: "discountPercentage",
      startIndex: 0,
      endIndex: 18,
    });
    this.getCards({ limit: 18, skip: 0 });
    this.readLocalUserData();
    this.getLikedProducts();
    this.getBasketProducts();
    this.getUserOrders();
  },
  methods: {
    ...mapMutations({
      changeUserData: "changeUserData",
      readLocalUserData: "user/readLocalUserData",
      delCardsInLiked: "delCardsInLiked",
      delCardsInBasket: "delCardsInBasket",
      clearOrders: "clearOrders",
      addInOrders: "addInOrders",
    }),
    ...mapActions({
      getSortedProducts: "getSortedProducts",
      getCards: "getCards",
      getSingleProduct: "getSingleProduct",
    }),
    getLikedProducts() {
      this.delCardsInLiked();
      for (const id of this.likedProducts) {
        this.getSingleProduct({ id: id, commitName: "addCardInLiked" });
      }
    },
    getBasketProducts() {
      this.delCardsInBasket();
      for (const item of this.baskedProducts) {
        this.getSingleProduct({ id: item.id, commitName: "addCardInBasket" });
      }
    },
    getUserOrders() {
      this.clearOrders();
      for (const order of this.currentOrders) {
        this.getUserOrderProduct(order);
      }
    },
    async getUserOrderProduct({ id, status, sum, products }) {
      const tempProducts = [];
      for (const item of products) {
        try {
          const response = await fetch(`${this.url}/products/${item.id}`);
          const result = await response.json();
          result.quantity = item.value;
          tempProducts.push(result);
        } catch (error) {
          console.log(error.message);
        }
      }
      this.addInOrders({ id, status, sum, products: tempProducts });
    },
  },
  computed: {
    ...mapState({
      likedProducts: (state) => state.user.userData.likedProducts,
      baskedProducts: (state) => state.user.userData.inBasketProducts,
      url: (state) => state.serverUrl,
      currentOrders: (state) => state.user.userData.currentOrders,
    }),
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: #b5b3b3;
}
</style>
