<template>
    <div class="articles-wrap">
      <div class="wrap">
        <section class="articles">
          <h2 class="cabin-700 articles__title">Поиск товаров</h2>
          <div
          class="articles__box">
            <SecondCard
              v-for="card in searchResalt"
              :key="card.id"
              :article="card"
              @delCardInLiked="delCardInLiked(card.id)"
            />
          </div>
        </section>
        <div v-if="!searchResalt.length" class="search__empty">
          <p class="oxygen-regular search__empty-txt">По вашему запросу не найдено ни одного совпадения</p>
          <p @click="$router.push(`/`)" class="oxygen-regular search__empty-txt">
            Перейти на главную страницу
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SecondCard from "@/components/SecondCard.vue";
  import { mapState } from "vuex";
  
  export default {
    components: {
      SecondCard,
    },
    computed: {
      ...mapState({
        searchResalt: (state) => state.searchResalt,
      }),
    },
  };
  </script>
  <style lang="scss" scoped>
  .search__empty {
    padding-top: 60px;
    padding-bottom: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  
    &-txt:last-child {
      color: #12d0a7;
      cursor: pointer;
    }
  }
  </style>