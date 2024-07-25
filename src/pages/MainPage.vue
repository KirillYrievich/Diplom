<template>
  <div class="main-wrap">
    <div class="wrap">
      <SwipperAutoplay />
    </div>
  </div>
  <div class="category-wrap">
    <div class="wrap">
      <section class="category">
        <a
          v-for="category in categoryGrid"
          @click="clickForCategory(category)"
          class="category__link"
        >
          <img
            :src="category.imgsrc"
            :alt="category.name.ru"
            class="category__img"
          />
          <span class="category__name">{{ category.name.ru }}</span>
        </a>
      </section>
    </div>
  </div>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Новинки</h2>
        <div class="articles__box">
          <SecondCard
            v-for="card in newProducts.slice(0, 3)"
            :key="card.id"
            :article="card"
          />
        </div>
        <div class="articles__greenbtn-box">
          <div class="line"></div>
          <GreenButton @click="clickForSortedProducts(newProducts, 'Новинки')"
            >Перейти в каталог</GreenButton
          >
          <div class="line"></div>
        </div>
      </section>
    </div>
  </div>
  <div class="articles-wrap-mid">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Бестселлеры</h2>
        <div class="articles__box">
          <SecondCard
            v-for="card in mostRatedProducts.slice(0, 3)"
            :key="card.id"
            :article="card"
          />
          <!-- <SecondCard :articles="mostRatedProducts" /> -->
        </div>
        <div class="articles__greenbtn-box">
          <div class="line"></div>
          <GreenButton
            @click="clickForSortedProducts(mostRatedProducts, 'Бестселлеры')"
            >Перейти в каталог</GreenButton
          >
          <div class="line"></div>
        </div>
      </section>
    </div>
  </div>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Рекомендуем</h2>
        <div class="articles__box">
          <SecondCard
            v-for="card in recomendProducts.slice(0, 3)"
            :key="card.id"
            :article="card"
          />
          <!-- <SecondCard :articles="recomendProducts" /> -->
        </div>
        <div class="articles__greenbtn-box">
          <div class="line"></div>
          <GreenButton
            @click="clickForSortedProducts(recomendProducts, 'Рекомендуем')"
            >Перейти в каталог
          </GreenButton>
          <div class="line"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SecondCard from "@/components/SecondCard.vue";
import GreenButton from "@/components/GreenButton.vue";
import SwipperAutoplay from "@/components/SwipperAutoplay.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "MainPage",
  components: {
    SecondCard,
    GreenButton,
    SwipperAutoplay,
  },
  methods: {
    ...mapMutations({
      addCardsInArticles: "addCardsInArticles",
      delCardsInArticles: "delCardsInArticles",
    }),
    ...mapActions({
      getProductsForCategory: "getProductsForCategory",
    }),
    clickForCategory(category) {
      this.delCardsInArticles();
      for (const sub of category.subkategory) {
        this.getProductsForCategory(sub.en);
      }
      this.$router.push(`/products/${category.name.ru.toLowerCase()}`);
    },
    clickForSortedProducts(sortedProducts, title) {
      this.delCardsInArticles();
      this.addCardsInArticles(sortedProducts);
      this.$router.push(`/products/${title.toLowerCase()}`);
    },
  },
  computed: {
    ...mapState({
      categoryGrid: (state) => state.categoryGrid,
      newProducts: (state) => state.newProducts,
      mostRatedProducts: (state) => state.mostRatedProducts,
      recomendProducts: (state) => state.recomendProducts,
    }),
  },
};
</script>

<style lang="scss" scoped>

.green-button {
  padding: 23px 90px;
  border-radius: 30%;
  margin-right: 40px;
  margin-left: 40px;

  @media (width < 1024px) {
    padding: 14px 46px;
  }
  @media (width < 540px) {
    padding: 10px 16px;
    font-size: 10px;
    margin-left: 6px;
    margin-right: 6px;
  }
}
.main {
  &__img-box {
    width: 1200px;
    position: relative;
    overflow: hidden;
    padding-top: 50%;
    background: rgb(234, 234, 234);
  }
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    // animation: imagesFading 1s;
  }

  &__btn {
    padding: 10px;
    opacity: 0.7;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
  }
  &__btn-prev {
    position: absolute;
    bottom: 10%;
    right: 15%;
  }
  &__btn-next {
    position: absolute;
    bottom: 10%;
    right: 10%;
  }
}
.category {
  margin-top: 36px;
  display: grid;
  grid-template: 290px 290px/1fr 1fr 1fr;
  padding-bottom: 48px;
  gap: 5px;

  @media (width < 1200px) {
    grid-template: 240px 240px/1fr 1fr 1fr;
  }
  @media (width < 1024px) {
    grid-template: 185px 185px/1fr 1fr 1fr;
  }
  @media (width < 768px) {
    grid-template: 180px 180px 180px/1fr 1fr;
    }
    @media (width < 540px) {
      grid-template: 116px 116px 116px/1fr 1fr;
  }

  &-wrap {
    background-color: #ebebeb;
  }
  &__link {
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 20px 8px 20px 0px;
    // border: 1px solid #000;
  }
  &__link:hover {
    filter: contrast(0.5);
  }
  &__img {
    position: absolute;
    left: -5%;
    height: 100%;
    // z-index: -1;
  }
  &__name {
    position: absolute;
    left: 20px;
    bottom: 20px;
    padding: 8px 10px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 20px 8px 20px 0px;
    background: rgb(255, 255, 255);
    color: #000;
    text-transform: uppercase;
  }
  &__link:first-child {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__link:nth-child(2) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  &__link:nth-child(3) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__link:nth-child(4) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__link:nth-child(5) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  &__link:nth-child(6) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.articles-wrap-mid {
  background-color: #ebebeb;
}
.articles__card:last-child {
  @media (width < 1024px) {
    display: none;
  }
}
</style>
