<template>
  <div class="product-wrap">
    <div class="wrap">
      <section class="product flex">
        <div class="product__images flex">
          <div class="product__pagination">
            <figure
              v-for="(imgsrc, index) in product?.images"
              :key="index"
              :product="product"
              class="product__pagination-item"
              @click="imgCurrent = index"
            >
              <img :src="imgsrc" class="product__pagination-img" />
            </figure>
          </div>
          <figure class="product__img-box">
            <img
              @click="openInNewWindow(product.images[imgCurrent])"
              :src="product.images[imgCurrent]"
              alt="product.title"
              class="product__img"
              :imgCurrent="imgCurrent"
            />
          </figure>
        </div>
        <div class="product__info">
          <h2 class="product__title cabin-700">{{ product?.title }}</h2>
          <p
            v-if="product.stock"
            class="oxygen-regular product__text product__amount"
          >
            В наличие
          </p>
          <p v-else class="oxygen-regular product__text product__ended">
            Товар закончился
          </p>
          <p class="cabin-500 product__text">Цена: {{ product?.price }} $</p>
          <p class="oxygen-regular product__text">
            {{ product.description }}
          </p>
          <div class="flex product__size-box">
            <div>
              <p class="cabin-500 product__category">Тип товара:</p>
              <p class="cabin-500 product__category">
                {{ product.category }}
              </p>
              <p class="cabin-500 product__category">Бренд:</p>
              <p class="cabin-500 product__category">
                {{ product.brand }}
              </p>
            </div>
            <SelectComp
              v-if="productCategory.includes(product.category)"
              :options="options"
              @selectSize="selectSize"
            />
          </div>
          <div class="add-to-cart flex">
            <label class="oxygen-regular add-to-cart__label">Количество</label>
            <div class="add-to-cart flex-start">
              <button @click="decreseQuantity" class="add-to-cart__minus">
                −
              </button>
              <input
                type="number"
                class="add-to-cart__quantity"
                v-model="quantity"
                name="quantity"
                min="1"
                max="100"
              />
              <button @click="increseQuantity" class="add-to-cart__plus">
                +
              </button>
            </div>
            <div class="add-to-cart__width">
              <button
                @click="toggleInBasket"
                class="oxygen-regular add-to-cart__submit"
                type="submit"
              >
                {{ inBasket ? "Убрать" : "В корзину" }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SelectComp from "@/components/SelectComp.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    SelectComp,
  },
  data() {
    return {
      imgCurrent: 0,
      productCategory: [
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
      ],
      size: "",
      quantity: 1,
      inBasket: false,
      options: [
        { name: "s", value: "S" },
        { name: "m", value: "M" },
        { name: "l", value: "L" },
      ],
    };
  },
  created() {
    this.checkInBasket();
  },
  mounted() {
    this.checkInBasket();
  },
  methods: {
    ...mapMutations({
      rewriteLocalUserData: "user/rewriteLocalUserData",
    }),
    openInNewWindow(url) {
      window.open(url);
    },
    selectSize(value) {
      this.size = value;
    },
    decreseQuantity() {
      this.quantity > 1 ? this.quantity-- : false;
    },
    increseQuantity() {
      this.quantity <= 100 ? this.quantity++ : false;
    },
    checkInBasket() {
      if (
        this.basketList.filter((item) => item.id === this.product.id).length
      ) {
        this.inBasket = true;
      } else {
        this.inBasket = false;
      }
    },
    toggleInBasket() {
      if (!this.inBasket) {
        this.rewriteLocalUserData({
          key: "inBasketProducts",
          value: [
            ...this.basketList,
            { id: this.product.id, value: this.quantity },
          ],
        });
        this.inBasket = true;
      } else {
        this.rewriteLocalUserData({
          key: "inBasketProducts",
          value: this.basketList.filter((item) => item.id !== this.product.id),
        });
        this.inBasket = false;
      }
    },
  },
  computed: {
    ...mapState({
      product: (state) => state.user.userData.openProduct,
      basketList: (state) => state.user.userData.inBasketProducts,
    }),
  },
};
</script>

<style lang="scss" scoped>
.product {
  color: black;
  padding-top: 96px;
  padding-bottom: 48px;

  @media (width < 768px) {
    flex-direction: column;
  }
  @media (width < 540px) {
  }
  &__images {
    align-items: start;
  }
  &__pagination-img {
    height: 50px;
    overflow: hidden;
  }
  &__amount {
    color: #12d0a7;
  }
  &__amount:before {
    content: "";
    display: inline-block;
    margin-right: 5px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: #12d0a7;
  }
  &__ended {
    color: red;
  }
  &__ended:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: red;
  }
  &__pagination {
    padding-right: 30px;
  }
  &__pagination-item {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    background: rgb(198, 198, 201);
    background: linear-gradient(
      218deg,
      rgba(198, 198, 201, 1) 0%,
      rgba(229, 229, 229, 1) 68%
    );
    overflow: hidden;
  }
  &__img-box {
    position: relative;
    display: flex;
    width: 500px;
    background: rgb(198, 198, 201);
    background: linear-gradient(
      218deg,
      rgba(198, 198, 201, 1) 0%,
      rgba(229, 229, 229, 1) 68%
    );
    overflow: hidden;
    padding-top: 75%;
    @media (width < 768px) {
      width: 400px;
    } 
    @media (width < 540px) {
    }
  }
  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
}
.product {
  &__info {
    width: 45%;
    @media (width < 768px) {
      width: auto;
      padding-top: 36px;
    }
  }
  &__title {
    // color: black;
    padding-bottom: 46px;
  }
  &__text {
    padding-bottom: 30px;
    // color: black;
  }
  //   &__value:before {
  //     width: 10px;
  //     height: 10px;
  //     background-color: green;
  // }
  &__category {
    font-size: 18px;
    text-transform: uppercase;
  }
  &__category:nth-child(3) {
    padding-top: 20px;
  }
  &__size-box {
    min-height: 136px;
  }
  &__size {
    cursor: pointer;
    outline: none;
    margin-bottom: 100px;
  }
}
.add-to-cart {
  display: flex;
  position: relative;
  &__box {
    padding-right: 20px;
  }
  &__label {
    padding-right: 20px;
    align-self: center;
    text-transform: uppercase;
  }
  &__minus,
  &__plus {
    padding: 9px 15px;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    background-color: #fff;
  }
  &__minus:hover,
  &__plus:hover {
    cursor: pointer;
  }
  &__quantity {
    width: 100%;
    outline: none;
    border: 1px solid #e4e4e4;
    background-color: #fff;
    text-align: center;
    padding: 12px 10px;
  }
  &__submit {
    margin-left: 20px;
    padding: 10px 32px;
    min-width: 120px;
    border-width: 0;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    border-radius: 0;
    background-image: linear-gradient(180deg, #12d0a7, #12d0a7);
    color: #005e37;
    transition-property: background, color, border-color;
    transition-timing-function: linear;
    transition-duration: 0.2s;
    transition-delay: 0s;
    font-weight: 400;
  }
  &__submit:hover {
    background-image: linear-gradient(180deg, #126d73, #358f64);
    color: #fff;
  }
  &__submit:active {
    background-image: linear-gradient(180deg, #128567, #0c6448);
    color: #fff;
  }
  &__width {
    display: flex;
    justify-content: flex-end;
    width: 35%;
    @media (width < 540px) {
    position: absolute;
    top: 70px;
    left: 33%;
  }
  }
}
</style>
