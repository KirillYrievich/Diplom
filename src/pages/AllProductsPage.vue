<template>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">{{ filter.pageTitle }}</h2>
        <div class="articles__filter">
          <div class="catalog__fillter-box flex">
            <details class="catalog__fillters">
              <summary class="catalog__fillter-desc">
                <h3 class="cabin-500 catalog__fillter-span">
                  {{ filter.title }}
                </h3>
                <svg
                  class="catalog__fillter-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 10"
                  fill="none"
                >
                  <path
                    d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                    fill="black"
                  />
                </svg>
              </summary>
              <details
                v-for="(category, index) in categories"
                :key="index"
                class="catalog__category"
              >
                <summary class="oxygen-regular catalog__category__summary">
                  {{ category.name.ru }}
                </summary>
                <div class="oxygen-regular catalog__category__item-box flex">
                  <div
                    v-for="subkategory in category.subkategory"
                    :key="subkategory.en"
                    class="subkategory-box"
                  >
                    <label>
                      <p class="catalog__category__item">
                        {{ subkategory.ru }}
                      </p>
                      <input
                        class="subkategory__checkbox"
                        type="checkbox"
                        :name="subkategory.en"
                        :value="subkategory.en"
                        v-model="checkedNames"
                      />
                    </label>
                  </div>
                </div>
              </details>
            </details>
            <div class="catalog__fillters">
              <!-- <ul class="flex">
                <li>1катег</li>
                <li>2катег</li>
                <li>3катег</li>
              </ul> -->
              <GreenButton
                @click="addFilters(checkedNames)"
                class="catalog__fillters-btn"
                >Подобрать</GreenButton
              >
              <GreenButton @click="clearFilters" class="catalog__fillters-btn"
                >Отчистить</GreenButton
              >
            </div>
          </div>
        </div>
        <div class="articles__box">
          <SecondCard v-for="card in articles" :key="card.id" :article="card" />
        </div>
      </section>
      <div class="articles__greenbtn-box">
        <div class="line"></div>
        <GreenButton @click="getNextCards">Загрузить...</GreenButton>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondCard from "@/components/SecondCard.vue";
import GreenButton from "@/components/GreenButton.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "AllProductsPage",
  components: {
    SecondCard,
    GreenButton,
  },
  data() {
    return {
      limit: 18,
      skip: 0,
      startIndex: 0,
      endIndex: 18,
      filter: {
        title: "Выбрать Фильтр",
        pageTitle: this.$route.params.category,
      },
      checkedNames: [],
    };
  },
  created() {
    if (this.$route.params.category === "все товары") this.clearFilters();
  },
  methods: {
    ...mapMutations({
      // addCardsInArticles: "addCardsInArticles",
      changeFilters: "changeFilters",
      delCardsInArticles: "delCardsInArticles",
      // addCardInArticles: "addCardInArticles",
    }),
    ...mapActions({
      getCards: "getCards",
      getProductsForCategory: "getProductsForCategory",
      getSortedProducts: "getSortedProducts",
    }),
    clearFilters() {
      this.checkedNames.splice(0, this.checkedNames.length);
      this.delCardsInArticles();
      this.getCards({ limit: 18, skip: 0 });
    },
    addFilters(checkedNames) {
      this.changeFilters(checkedNames);
      this.filtered();
    },
    filtered() {
      this.delCardsInArticles();
      for (const filter of this.filters) {
        this.getProductsForCategory(filter);
      }
    },
    getNextCards() {
      const condition = ["новинки", "бестселлеры", "рекомендуем"].indexOf(
        this.$route.params.category
      );
      if (this.$route.params.category === "все товары") {
        this.getCards({ limit: this.limit, skip: (this.skip += 18) });
      } else if (condition >= 0) {
        this.getSortedProducts({
          commitName: "addCardInArticles",
          sortParametr: ["id", "rating", "discountPercentage"][condition],
          startIndex: (this.startIndex += 18),
          endIndex: (this.endIndex += 18),
        });
      }
    },
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
      categories: (state) => state.categoryGrid,
      filters: (state) => state.filters,
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
}
summary {
  display: block;
}

summary::-webkit-details-marker {
  display: none;
}

.catalog-wrap {
  padding-left: 1rem;
  padding-right: 1rem;
}

.catalog {
  max-width: 1140px;
  margin: 0 auto;
  padding-bottom: 6rem;

  &__fillters-btn {
    border-radius: 0%;
    padding: 22px 50px;

    @media (width < 1024px) {
      margin-right: 0px;
      margin-left: 0px;
    }
    @media (width < 768px) {
      padding: 20px 24px;
    }
    @media (width < 540px) {
      padding: 15px 37px;
    }
  }

  &__fillters-btn:nth-child(2) {
    margin-left: 25px;

    @media (width < 768px) {
      margin-left: 10px;
    }
    @media (width < 540px) {
      margin-left: 0;
    }
  }

  &__category__checkbox {
    position: absolute;
    right: 0;
  }
}
.catalog__fillter-span {
  display: inline;
  text-transform: uppercase;
  cursor: default;
}
.catalog__fillter-icon {
  padding-left: 0.6875rem;
  width: 20px;
  height: 18px;
}
.catalog__fillter-box {
  padding-top: 3.25rem;
  padding-bottom: 4rem;
  position: relative;
  min-height: 1rem;
}

// .catalog__fillters {
//   width: 31%;
//   justify-content: flex-start;
// }
.catalog__fillters:first-child {
  width: 32%;
  background-image: linear-gradient(180deg, #12d0a7, #12d0a7);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: absolute;
  left: 0;
  top: 2.2rem;
  z-index: 5;

  @media (width < 1024px) {
    width: 36.5%;
    left: 50px;
  }
  @media (width < 768px) {
    width: 44.5%;
    left: 0;
  }

  @media (width < 540px) {
    width: 100%;
    left: 0;
    top: 4.2rem;
  }
}
.catalog__fillters:nth-child(2) {
  position: absolute;
  left: 46.333333%;
  top: 28%;
  @media (width < 768px) {
    top: 26.5%;
  }
  @media (width < 540px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    left: 0;
    top: 10%;
  }
}
.catalog__fillters[open] {
  width: 32%;
  background-image: linear-gradient(
    0deg,
    rgba(53, 143, 100, 0.95),
    rgba(18, 109, 115, 0.95)
  );
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-sizing: border-box;
  box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);
  @media (width < 1024px) {
    width: 36.5%;
  }
  @media (width < 768px) {
    width: 44.5%;
  }
  @media (width < 540px) {
    width: 100%;
  }
}
.catalog__fillter-desc {
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #ffffff;
  padding-left: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
}
.catalog__fillter-icon path {
  fill: #ffffff;
}

.catalog__fillters[open] .catalog__fillter-desc {
  color: #12d0a7;
}
.catalog__fillters[open] .catalog__fillter-icon path {
  fill: #12d0a7;
}
.catalog__category {
  // position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #6f6e6e;
  padding-left: 1rem;
  box-sizing: border-box;
  margin-bottom: 1.125rem;
}
.catalog__category__summary {
  padding-left: 0.75rem;
  box-sizing: border-box;
  padding-top: 0.5rem;
  padding-bottom: 0.625rem;
  color: #fff;
  border-left: 5px solid #12d0a7;
  border-bottom: 1px solid #12d0a7;
  cursor: pointer;
}
.catalog__category__item-box {
  // position: absolute;
  padding: 12px;
  flex-direction: column;
}
.catalog__category[open] {
  color: #12d0a7;
}

.catalog__category[open] .catalog__category__summary {
  color: #12d0a7;
}
.catalog__category[open] .catalog__category__item {
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #ffffff;
  cursor: pointer;
  padding-top: 0.6875rem;
}

.subkategory-box {
  position: relative;
}

.subkategory__checkbox {
  position: absolute;
  top: 10px;
  right: 0;
}
// .catalog__datails:last-child .catalog__datails__desc {
//   padding-right: 0;
// }
// .catalog__datails__desc {
//   font-size: 14px;
//   font-weight: 400;
//   line-height: normal;
//   color: #6f6e6e;
//   padding-right: 1.625rem;
//   position: relative;
// }
// .catalog__datails__desc::after {
//   // content: url(img/arrow-down.svg);
//   position: absolute;
//   padding-left: 0.625rem;
//   top: 0;
// }
// .catalog__datails-box {
//   flex-direction: column;
//   background: #fff;
//   box-shadow: 6px 4px 35px 0px rgba(0, 0, 0, 0.21);
//   z-index: 5;
//   min-width: 5rem;
//   position: absolute;
//   padding-bottom: 0.75rem;
//   left: -12px;
//   top: 25px;
// }
// .catalog__datails {
//   position: relative;
//   display: inline;
// }
// .catalog__datails[open] .catalog__size {
//   padding: 0.5625rem 0.5625rem 0 0.75rem;
// }
// .catalog__datails[open] .catalog__size__text {
//   padding-left: 0.5625rem;
//   font-size: 14px;
//   font-weight: 400;
//   line-height: normal;
//   color: #6f6e6e;
// }
// .catalog__goods {
//   flex-wrap: wrap;
//   padding-bottom: 6rem;
// }
</style>
