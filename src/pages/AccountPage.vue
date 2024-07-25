<template>
  <div class="wrap">
    <section class="account">
      <h2 class="cabin-700 account__title">Личный кабинет</h2>
      <div class="flex">
        <div class="account__list">
          <ul>
            <li
              @click="activate(index, item)"
              class="account__item"
              :class="item.active"
              v-for="(item, index) in accountList"
              :key="index"
            >
              {{ item.value }}
            </li>
          </ul>
        </div>
        <div class="account__page">
          <div class="wrapped" v-if="activeItem === 0">
            <div v-if="orders.length">
              <div
                class="account__orders"
                v-for="order in orders"
                :key="order.id"
              >
                <h3 class="cabin-500 account__order-title">
                  Статус заказа: {{ order.status }}
                </h3>
                <div class="account__order-box flex">
                  <article
                    v-for="(item, index) in order.products"
                    :key="index"
                    class="account__order"
                  >
                    <figure class="account__order-img-box">
                      <img
                        class="account__order-img"
                        :src="item.thumbnail"
                        :alt="item.title"
                      />
                    </figure>
                    <div class="account__order-quantity">
                      <span class="oxygen-regular">x{{ item.quantity }}</span>
                    </div>
                    <div class="account__order-text-box">
                      <p class="account__order-text">{{ item.title }}</p>
                      <p class="account__order-text">{{ item.price }} $</p>
                    </div>
                  </article>
                </div>
                <h3 class="cabin-500 account__order-sum">
                  Сумма заказа: {{ order.sum }} $
                </h3>
              </div>
            </div>
            <div v-else class="account__no-orders">
              <h3 class="cabin-500">У вас нет активных заказов</h3>
            </div>
          </div>
          <div class="wrapped" v-else-if="activeItem === 1">
            <h2 class="cabin-500 account__order-title">
              Изменение данных пользователя
            </h2>
            <form @submit="saveUserData">
              <div class="registration">
                <div class="registration__box">
                  <label class="registration__label">
                    <p class="oxygen-regular text">Фамилия</p>
                    <input
                      class="registration__input"
                      type="text"
                      placeholder="Фамилия"
                      v-model="surname"
                      name="usersurname"
                      required
                      pattern="(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)"
                    />
                  </label>
                  <label class="registration__label">
                    <p class="oxygen-regular text">Имя</p>
                    <input
                      class="registration__input"
                      type="text"
                      placeholder="Имя"
                      v-model="name"
                      id="username"
                      name="username"
                      autocomplete="given-name"
                      required
                      pattern="(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)"
                    />
                  </label>
                  <label class="registration__label">
                    <p class="oxygen-regular text">Отчество</p>
                    <input
                      class="registration__input"
                      type="text"
                      placeholder="Отчество"
                      v-model="lastname"
                      name="userlastname"
                      pattern="(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14}$)"
                    />
                  </label>
                  <label class="registration__label">
                    <p class="oxygen-regular text">Пароль</p>
                    <input
                      class="registration__input"
                      :type="showpass ? 'text' : 'password'"
                      v-model="password"
                      name="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Должен содержать по меньшей мере одну цифру, одну большую и одну маленькую буквы латинского алфавита и быть в длину не менее 8 символов"
                      required
                    />
                  </label>
                  <label class="registration__label">
                    <p class="oxygen-regular text">Подтвердите пароль</p>
                    <input
                      class="registration__input"
                      :type="showpass ? 'text' : 'password'"
                      title="Пароль не совпал"
                      name="dpass"
                      required
                      :pattern="password"
                    />
                  </label>
                </div>
                <div class="registration__box">
                  <label class="registration__label">
                    <p class="oxygen-regular text">Email</p>
                    <input
                      class="registration__input"
                      type="email"
                      placeholder="Email"
                      v-model="login"
                      name="useremail"
                      required
                      pattern="^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@.+(\..{1,11})?)$"
                    />
                  </label>
                  <label class="registration__label">
                    <p class="oxygen-regular text">Телефон</p>
                    <input
                      class="registration__input"
                      type="tel"
                      v-model="phone"
                      name="phonenumber"
                      placeholder="Телефон"
                      pattern="^\+7[1-9]{10}$"
                      required
                    />
                  </label>
                  <label class="registration__label">
                    <p class="oxygen-regular text">Адрес</p>
                    <input
                      class="registration__input"
                      type="text"
                      placeholder="Адрес"
                      v-model="adress"
                      name="adress"
                    />
                  </label>
                  <div class="registration__show-pass">
                    <input type="checkbox" id="show" v-model="showpass" />
                    <span class="oxygen-regular"
                      >{{ showpass ? "Скрыть пароль" : "Показать пароль" }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="registration__btn-box">
                <GreenButton class="green-btn">СОХРАНИТЬ</GreenButton>
              </div>
            </form>
          </div>
          <div class="wrapped" v-else-if="activeItem === 2">
            <section class="articles">
              <h2 class="cabin-500 articles__title">Товары в избранном</h2>
              <div class="articles__box">
                <SecondCard
                  v-for="card in liked"
                  :key="card.id"
                  :article="card"
                />
              </div>
            </section>
            <div v-if="!liked.length" class="liked__empty">
              <p class="oxygen-regular liked__empty-txt">
                В избранном нет товаров
              </p>
              <p
                @click="$router.push(`/`)"
                class="oxygen-regular liked__empty-txt"
              >
                Перейти на главную страницу
              </p>
            </div>
          </div>
          <div class="wrapped" v-else>
            <section class="articles">
              <h2 class="cabin-500 articles__title">Товары в корзине</h2>
              <div class="articles__box">
                <SecondCard
                  v-for="card in basket"
                  :key="card.id"
                  :article="card"
                />
              </div>
            </section>
            <div v-if="!basket.length" class="liked__empty">
              <p class="oxygen-regular liked__empty-txt">
                В корзине нет товаров
              </p>
              <p
                @click="$router.push(`/`)"
                class="oxygen-regular liked__empty-txt"
              >
                Перейти на главную страницу
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SecondCard from "@/components/SecondCard.vue";
import GreenButton from "@/components/GreenButton.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    SecondCard,
    GreenButton,
  },
  data() {
    return {
      accountList: [
        {
          value: "Текущий заказ",
          active: "account__item-active",
          path: "/account",
        },
        { value: "Личные данные", active: "", path: "/account/user" },
        { value: "Избранные товары", active: "", path: "/account/liked" },
        { value: "Корзина", active: "", path: "/account/basket" },
      ],
      activeItem: 0,
      login: "",
      password: "",
      name: "",
      surname: "",
      lastname: "",
      phone: "",
      adress: "",
      showpass: false,
      sum: 0,
    };
  },
  created() {
    this.readInputValues();
  },
  methods: {
    ...mapMutations({
      rewriteLocalUserObject: "user/rewriteLocalUserObject",
    }),
    activate(index, item) {
      if (index !== this.activeItem) {
        this.accountList[this.activeItem].active = "";
        item.active = "account__item-active";
        this.activeItem = index;
      }
    },
    readInputValues() {
      this.login = this.user.emailLogin;
      this.name = this.user.name;
      this.surname = this.user.surname;
      this.lastname = this.user.lastname;
      this.phone = this.user.phone;
      this.adress = this.user.adress;
    },
    saveUserData() {
      const userDataChanged = {
        emailLogin: this.login,
        // password: this.password,
        name: this.name,
        surname: this.surname,
        lastname: this.lastname,
        phone: this.phone,
        adress: this.adress,
      };
      this.rewriteLocalUserObject(userDataChanged);
    },
  },
  computed: {
    ...mapState({
      // currentOrders: (state) => state.user.userData.currentOrders,
      orders: (state) => state.orders,
      liked: (state) => state.liked,
      basket: (state) => state.basket,
      user: (state) => state.user.userData,
    }),
  },
};
</script>

<style lang="scss" scoped>
.articles {
  padding-top: 0;
  &__box {
    column-gap: 30px;
  }
}
.wrapped {
  width: auto;
}
.account {
  &__title {
    padding-top: 46px;
    color: #000;
  }
  &__list {
    margin-top: 32px;
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
      width: 38%;
    }
    @media (width < 540px) {
      width: 30%;
    }
  }

  &__item {
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    padding-left: 1rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-transform: uppercase;
    box-sizing: border-box;
    color: #fff;
    border-left: 5px solid #12d0a7;
    border-bottom: 1px solid #12d0a7;
    cursor: pointer;
    @media (width < 540px) {
      font-size: 12px;
      padding-left: 10px;
    }
  }

  &__item-active {
    background-image: linear-gradient(180deg, #12d0a7, #12d0a7);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
  &__page {
    width: 61.5%;
    margin-top: 32px;

    @media (width < 1024px) {
      width: 57.5%;
    }
    @media (width < 540px) {
      width: auto;
      padding-left: 10px;
    }
  }
  &__order-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 24px;
  }
}
.articles__card {
  @media (width < 540px) {
    width: 200px;
  }
}
.account {
  &__order {
    position: relative;
    width: 90px;
    background-image: linear-gradient(
      0deg,
      rgba(53, 143, 100, 0.95),
      rgba(18, 109, 115, 0.95)
    );
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 5px;
    box-sizing: border-box;
    margin-right: 20px;
    @media (width < 540px) {
      margin-right: 10px;
    }
  }
  &__order-text-box {
    width: 100%;
    overflow: hidden;
  }
  &__order-title {
    padding-bottom: 24px;
    color: #000;
  }
  &__order-sum {
    padding-top: 24px;
    padding-bottom: 24px;
    color: #000;
  }
  &__order-img-box {
    width: 90px;
    height: 90px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    border-radius: 5px 5px 0px 0px;
    background: rgb(234, 234, 234);
  }
  &__order-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__order-quantity {
    position: absolute;
    top: -10%;
    right: -10%;
    border-radius: 100%;
    text-align: center;
    color: #000;
  }
  &__order-text {
    padding: 5px 5px;
    color: #fff;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
  }
}
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
.registration {
  color: #000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (width < 1024px) {
    padding-right: 24px;
  }

  .title {
    padding-top: 48px;
    text-transform: uppercase;
    padding-bottom: 24px;
  }
  .title2 {
    text-transform: uppercase;
    padding-bottom: 24px;
  }
  .txt {
    margin-bottom: 10px;
  }
  .text {
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .text2 {
    padding-bottom: 30px;
    font-size: 12px;
  }
  .link {
    font-size: 12px;
    color: #12d0a7;
    border-bottom: 1px solid transparent;
  }
  .link2 {
    color: #12d0a7;
    border-bottom: 1px solid transparent;
  }
  .link3 {
    color: #12d0a7;
  }
  .green-btn {
    width: 100%;
    border-radius: 0;
  }
  .link:hover,
  .link2:hover {
    border-bottom: 1px solid #12d0a7;
    cursor: pointer;
  }
  &__box {
    width: 47%;
  }
  &__input {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #e4e4e4;
    background-color: #f0f0f0;
    padding: 14px 15px 13px;
    outline: none;
    font-size: 14px;
    border-radius: 0;
    box-shadow: none;
  }
  &__input:hover {
    border-color: #12d0a7;
  }
  &__input:focus {
    border-color: #fc7900;
    color: #0e0e0e;
  }
  &__btn-box {
    width: 200px;
    padding-top: 32px;
    padding-bottom: 12px;
  }
  &__show-pass {
    margin-top: 55px;
    display: flex;
  }
}
</style>
