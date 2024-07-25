<template>
  <article class="articles__card">
    <figure class="articles__img-box">
      <!-- Переход по ссылке с помощью локи -- см ProductComp openInNewWindow> -->
      <!-- <a :href="article.images[0]"></a> -->
      <img class="articles__img" :src="article.thumbnail" alt="#" />
      <div class="articles__category">
        <p class="articles__category-text">{{ article.category }}</p>
      </div>
    </figure>
    <h3 class="articles__card-headding" v-html="article.title"></h3>
    <p class="oxygen-regular articles__card-brand">{{ article.brand }}</p>
    <div class="flex">
      <p class="oxygen-regular articles__price-text">Цена со скидкой</p>
      <div class="articles__price-box flex">
        <p class="oxygen-regular articles__card-price">{{ article.price }} $</p>
        <p class="oxygen-regular articles__card-discount">
          {{
            Math.ceil(
              (article.price * (100 - article.discountPercentage)) / 100
            )
          }}
          $
        </p>
      </div>
    </div>
    <div class="articles__icons-box">
      <GreenButton
        class="articles__btn"
        @click="linkedInSingleProduct(article.id)"
        >Подробнее</GreenButton
      >
      <svg
        @click="likeToggle(article.id)"
        class="articles__like"
        :class="likeActive"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 740.000000 740.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,740.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M4771 6464 c-381 -52 -713 -219 -966 -485 -125 -132 -204 -245 -295
  -422 l-56 -107 -46 62 c-52 70 -189 209 -258 261 -258 194 -588 292 -875 258
  -260 -30 -467 -132 -645 -317 -298 -311 -426 -800 -325 -1247 66 -293 199
  -606 369 -867 143 -218 374 -463 611 -648 191 -149 705 -482 743 -482 7 0 12
  8 12 18 0 12 -40 45 -117 97 -408 275 -714 534 -915 775 -267 319 -465 749
  -533 1160 -21 122 -16 331 9 448 90 413 344 706 684 789 93 22 266 22 365 -1
  406 -93 724 -420 777 -799 12 -83 33 -123 80 -154 62 -42 168 -23 213 38 10
  14 29 70 42 125 122 515 445 901 877 1049 131 46 223 59 393 60 177 0 259 -14
  397 -67 229 -87 403 -284 464 -523 25 -97 25 -319 0 -434 -59 -275 -221 -598
  -460 -918 -150 -201 -256 -316 -659 -713 -358 -354 -473 -476 -623 -665 -275
  -347 -487 -749 -634 -1200 -51 -158 -119 -425 -113 -442 12 -31 34 -5 84 99
  294 617 578 1031 970 1413 151 147 210 198 555 486 148 125 327 279 397 343
  504 465 848 1007 947 1496 125 614 -146 1183 -673 1412 -236 102 -522 139
  -796 102z"
          />
        </g>
      </svg>
      <svg
        @click="basketToggle(article.id)"
        :class="basketActive"
        class="articles__basket"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        viewBox="0 0 576 512"
      >
        <path
          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
        />
      </svg>
    </div>
  </article>
</template>

<script>
import GreenButton from "./GreenButton.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "SecondCardComp",
  props: {
    article: Object,
  },
  emits: ["delCardInLiked"],
  components: { GreenButton },
  data() {
    return {
      inLiked: false,
      inBasket: false,
      likeActive: "",
      basketActive: "",
    };
  },
  methods: {
    ...mapMutations({
      rewriteLocalUserData: "user/rewriteLocalUserData",
      addCardInLiked: "addCardInLiked",
      delCardInLiked: "delCardInLiked",
      addCardInBasket: "addCardInBasket",
      delCardInBasket: "delCardInBasket",
      changeOpenProduct: "user/changeOpenProduct",
    }),
    likeToggle(id) {
      this.inLiked = !this.inLiked;
      this.inLiked === true
        ? (this.likeActive = "articles__like-active")
        : (this.likeActive = "");
      if (this.inLiked) {
        this.rewriteLocalUserData({
          key: "likedProducts",
          value: [...this.inLikedList, id],
        });
        this.addCardInLiked(this.article);
      } else {
        this.rewriteLocalUserData({
          key: "likedProducts",
          value: this.inLikedList.filter((item) => item !== id),
        });
        this.delCardInLiked(this.article);
      }
    },
    basketToggle(id) {
      this.inBasket = !this.inBasket;
      this.inBasket === true
        ? (this.basketActive = "articles__basket-active")
        : (this.basketActive = "");
      if (this.inBasket) {
        this.rewriteLocalUserData({
          key: "inBasketProducts",
          value: [...this.inBasketList, { id: id, value: 1 }],
        });
        this.addCardInBasket(this.article);
      } else {
        this.rewriteLocalUserData({
          key: "inBasketProducts",
          value: this.inBasketList.filter((item) => item.id !== id),
        });
        this.delCardInBasket(this.article);
      }
    },
    linkedInSingleProduct(id) {
      this.changeOpenProduct(this.article);
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    if (
      this.inBasketList.filter((item) => item.id === this.article.id).length
    ) {
      this.inBasket = true;
      this.basketActive = "articles__basket-active";
    }
    if (this.inLikedList.includes(this.article.id)) {
      this.inLiked = true;
      this.likeActive = "articles__like-active";
    }
  },
  computed: {
    ...mapState({
      // product: (state) => state.product,
      inBasketList: (state) => state.user.userData.inBasketProducts,
      inLikedList: (state) => state.user.userData.likedProducts,
    }),
  },
};
</script>

<style lang="scss" scoped>
.articles {
  &__category {
    position: absolute;
    left: 20px;
    bottom: 20px;
    padding: 8px 10px;
    border: 1px solid #9de7d7;
    border-radius: 20px 8px 20px 0px;
    background: rgb(255, 255, 255);
    @media (width < 768px) {
      left: 12px;
    bottom: 12px;
    }
  }
  &__category-text {
    color: rgb(77, 80, 83);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
    @media (width < 768px) {
      font-size: 10px;
    }
  }
  &__card {
    padding: 21px;
    width: 352px;
    color: #000;
    box-sizing: border-box;
    background-color: #ecffea;
    border-radius: 12px;
    // border-radius: 62px 15px 62px 0px;
    // box-shadow: 0px 0px 3px 0px #12d0a7;
    transition: all 0.5s;

    @media (width < 1200px) {
      width: 310px;
    }
    @media (width < 768px) {
      width: 230px;
    }
  }
  &__card:hover {
    filter: contrast(0.85);
  }
  // &__card-grey:hover {
  //   background: rgb(199 199 199);
  // }
  &__card:hover &__btn {
    background-image: linear-gradient(180deg, #126d73, #358f64);
    color: #fff;
  }
  &__card:hover &__btn:active {
    background-image: linear-gradient(180deg, #128567, #0c6448);
    color: #fff;
  }

  &__img-box {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 75%;
    border-radius: 20px 20px 0px 0px;
    background: rgb(234, 234, 234);
    border: 1px solid #9de7d7;
  }
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__icons-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    @media (width < 768px) {
    padding-top: 10px;
    }
  }

  &__btn {
    padding: 16px 46px;
    @media (width < 768px) {
      padding: 10px 10px;
      font-size: 12px;
      min-width: 100px;
    }
    
  }
  &__like {
    // padding-right: 20px;
    padding-left: 20px;
  }
  &__like:hover {
    cursor: pointer;
  }
  &__like > g {
    // fill: #12d0a7;
    fill: #9de7d7;
  }
  &__like-active > g {
    fill: #ff0000;
  }
  &__basket {
    // fill: #12d0a7;
    fill: #9de7d7;
    padding-left: 10px;
    padding-right: 10px;
    @media (width < 768px) {
      padding-right: 0px;
    }
  }
  &__basket:hover {
    cursor: pointer;
  }
  &__basket-active {
    fill: #ff0000;
  }
  &__card-headding {
    padding-top: 20px;
    // padding-bottom: 20px;
    color: rgb(41, 47, 54);
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    @media (width < 768px) {
      font-size: 16px;
      padding-top: 10px;
    }
  }
  &__price-text {
    align-self: end;
    font-size: 24px;
    padding-bottom: 3px;
    @media (width < 768px) {
      font-size: 12px;
    }
  }
  &__price-box {
    flex-direction: column;
    align-items: end;
  }
  &__card-price {
    text-decoration: line-through;
    font-size: 14px;
  }
  &__card-discount {
    font-size: 24px;
    color: #126d73;
    @media (width < 768px) {
      font-size: 20px;
    }
  }
  &__card-brand {
    padding-bottom: 20px;
  }
  // &__btn-box {
  //   display: flex;
  //   justify-content: space-between;
  //   padding-bottom: 16px;
  //   align-items: center;
  // }
  // &__btn {
  //   background: #9de7d7;
  //   display: flex;
  //   text-align: center;
  //   border-radius: 100%;
  //   padding: 18px 22px;
  //   transition: all 0.5s;
  // }
}
</style>
