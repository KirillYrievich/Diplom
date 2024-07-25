<template>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <h2 class="cabin-700 articles__title">Избранное</h2>
        <div class="articles__box">
          <SecondCard v-for="card in liked" :key="card.id" :article="card" />
        </div>
      </section>
      <div v-if="!liked.length" class="liked__empty">
        <p class="oxygen-regular liked__empty-txt">В избранном нет товаров</p>
        <p @click="$router.push(`/`)" class="oxygen-regular liked__empty-txt">
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
  name: "LikedPage",
  components: {
    SecondCard,
  },
  computed: {
    ...mapState({
      liked: (state) => state.liked,
    }),
  },
};
</script>
<style lang="scss" scoped>
.liked__empty {
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
