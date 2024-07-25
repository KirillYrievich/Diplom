import { createStore } from "vuex";
import { UserLocalStoreData } from "@/store/localStore";

export default createStore({
  state: {
    // HeaderComp
    navLinks: [
      {
        name: "Главная",
        path: "/",
      },
      {
        name: "Каталог",
        path: "/products/все товары",
      },
      {
        name: "Доставка",
        path: "/delivery",
      },
      {
        name: "Контакты",
        path: "/contacts",
      },
      {
        name: "О&nbspМагазине",
        path: "/about",
      },
    ],
    mainphoto: [
      require("@/assets/img/main1.jpg"),
      require("@/assets/img/main2.jpg"),
      require("@/assets/img/main3.jpg"),
      require("@/assets/img/main4.jpg"),
      require("@/assets/img/main5.jpg"),
    ],
    serverUrl: "https://dummyjson.com",
    newProducts: [],
    mostRatedProducts: [],
    recomendProducts: [],
    // AllProductPage, MainPage
    categoryGrid: [
      {
        name: { ru: "Техника", en: "technique" },
        subkategory: [
          { en: "smartphones", ru: "смартфоны" },
          { en: "laptops", ru: "ноутбуки" },
          { en: "mens-watches", ru: "мужские часы" },
          { en: "womens-watches", ru: "женские часы" },
        ],
        imgsrc: require("@/assets/img/category1.avif"),
      },
      {
        name: { ru: "Косметика", en: "cosmetics" },
        subkategory: [
          { en: "fragrances", ru: "парфюмерия" },
          { en: "skincare", ru: "крема" },
        ],
        imgsrc: require("@/assets/img/category2.avif"),
      },
      {
        name: { ru: "Мужчинам", en: "mens" },
        subkategory: [
          { en: "mens-shoes", ru: "мужские часы" },
          { en: "mens-watches", ru: "женские часы" },
        ],
        imgsrc: require("@/assets/img/category3.avif"),
      },
      {
        name: { ru: "Женчинам", en: "womens" },
        subkategory: [
          { en: "tops", ru: "топы" },
          { en: "womens-dresses", ru: "платья" },
          { en: "womens-shoes", ru: "туфли" },
          { en: "womens-jewellery", ru: "украшения" },
        ],
        imgsrc: require("@/assets/img/category4.avif"),
      },
      {
        name: { ru: "Для дома", en: "homeuses" },
        subkategory: [
          { en: "home-decoration", ru: "декор" },
          { en: "furniture", ru: "мебель" },
          { en: "lighting", ru: "люстры" },
        ],
        imgsrc: require("@/assets/img/category5.avif"),
      },
      {
        name: { ru: "Другое", en: "other" },
        subkategory: [
          { en: "groceries", ru: "продукты" },
          { en: "motorcycle", ru: "мотоциклы" },
          { en: "sunglasses", ru: "солнцезащитные очки" },
          { en: "automotive", ru: "для авто" },
        ],
        imgsrc: require("@/assets/img/category6.jpg"),
      },
    ],
    // AllProductPage
    articles: [],
    filters: [],
    category: [],
    sorted: [],
    liked: [],
    basket: [],
    orders: [],
    // SecondCard.vue
    // inBasketProducts: [],
    // inLikedProducts: [],
    // SearchPage
    searchResalt: [],
  },
  getters: {},
  mutations: {
    addInOrders(state, order) {
      state.orders.push(order);
    },
    clearOrders(state) {
      state.orders = [];
    },
    addCardsInArticles(state, cards) {
      state.articles.push(...cards);
    },
    addCardInArticles(state, card) {
      state.articles.push(card);
    },
    delCardsInArticles(state) {
      state.articles.splice(0, state.articles.length);
    },
    addCardsInNewProducts(state, card) {
      state.newProducts.push(card);
    },
    addCardsInMostRatedProducts(state, card) {
      state.mostRatedProducts.push(card);
    },
    addCardsInRecomendProducts(state, card) {
      state.recomendProducts.push(card);
    },
    addCardInLiked(state, card) {
      state.liked.push(card);
    },
    delCardInLiked(state, card) {
      const delIndex = state.liked.findIndex((item) => item.id === card.id);
      state.liked.splice(delIndex, 1);
    },
    delCardsInLiked(state) {
      state.liked = [];
    },
    addCardInBasket(state, card) {
      state.basket.push(card);
    },
    delCardInBasket(state, card) {
      const delIndex = state.basket.findIndex((item) => item.id === card.id);
      state.basket.splice(delIndex, 1);
    },
    delCardsInBasket(state) {
      state.basket = [];
    },
    addCardInOrders(state, card) {
      state.basket.push(card);
    },

    changeFilters(state, filters) {
      state.filters.splice(0, state.filters.length),
        state.filters.push(...filters);
    },
    changeSingleProduct(state, singleProduct) {
      state.product = singleProduct;
    },
    changeSearchResalt(state, products) {
      state.searchResalt = [];
      state.searchResalt.push(...products);
    },
  },
  actions: {
    async getCards({ state, commit }, { limit, skip }) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products?limit=${limit}&skip=${skip}`
        );
        const result = await response.json();
        commit("addCardsInArticles", result.products);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getSortedProducts(
      { state, commit },
      { commitName, sortParametr, startIndex, endIndex }
    ) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products?limit=${0}&select=${sortParametr}`
        );
        const result = await response.json();
        const sorted = result.products.sort(
          (a, b) => b[sortParametr] - a[sortParametr]
        );
        for (let i = startIndex; i < endIndex; i++) {
          try {
            const response = await fetch(
              `https://dummyjson.com/products/${sorted[i].id}`
            );
            const result = await response.json();
            commit(commitName, result);
          } catch (e) {
            console.log(e.message);
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async getSingleProduct({ state, commit }, { id, commitName }) {
      try {
        const response = await fetch(`${state.serverUrl}/products/${id}`);
        const result = await response.json();
        // console.log(result);
        // commit("changeSingleProduct", result);
        commit(commitName, result);
        // this.articles.push(...result.products);
        // console.log(this.articles);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getProductsForCategory({ state, commit }, categoryName) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products/category/${categoryName}`
        );
        const result = await response.json();
        commit("addCardsInArticles", result.products);
      } catch (e) {
        console.log(e.message);
      }
    },
    async searchProduct({ state, commit }, searchParams) {
      try {
        const response = await fetch(
          `${state.serverUrl}/products/search?q=${searchParams}`
        );
        const result = await response.json();
        commit("changeSearchResalt", result.products);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  modules: {
    user: UserLocalStoreData,
  },
});
