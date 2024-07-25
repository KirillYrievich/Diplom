<template>
  <div class="header-bottom-wrap" :class="marginBottom">
    <div class="header-top-wrap" :class="marginTop">
      <div class="wrap">
        <div class="header-top flex">
          <div class="flex">
            <a href="#">
              <svg
                class="header-top__icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </a>
            <a href="#" class="header-top__phone oxygen-regular"
              >+7 960 147-29-70</a
            >
          </div>
          <ul class="flex header-top__list">
            <li class="header-top__icon">
              <a href="https://github.com/KirillYrievich">
                <svg
                  class="header-top__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  width="24"
                  height="24"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
            </li>
            <li class="header-top__icon">
              <a href="/;dogjpdt">
                <svg
                  class="header-top__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="21"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <router-link to="/authentification" class="flex">
            <p class="header-top__auth-txt">
              <a href="#" class="header-top__text oxygen-regular">{{
                userAuth ? "Личный кабинет" : "Вход"
              }}</a>
            </p>
            <svg
              class="header-top__icon header-top__user"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="23"
              height="23"
            >
              <path
                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="header-bottom flex-end">
        <nav class="header-bottom__nav">
          <router-link
            v-for="(navItem, index) in navLinks"
            :key="index"
            :to="navItem.path"
            class="header-bottom__item"
            ><span class="header-bottom__span oxygen-regular" v-html="navItem.name"></span>
          </router-link>
          
        </nav>
        <input id="check-menu" type="checkbox" />
          <label for="check-menu" class="check-menu">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512" fill="white" class="check-menu__svg">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </label>
          <ul class="header__check-menu">
              <h3 class="cabin-500">MENU</h3>
              <router-link
            v-for="(navItem, index) in navLinks"
            :key="index"
            :to="navItem.path"
            class="check-menu__item"
            ><span class="oxygen-regular" v-html="navItem.name"></span>
          </router-link>
          </ul>
        <svg
          @click="this.$router.push('/liked')"
          version="1.0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
          class="header-bottom__svg-like"
          xml:space="preserve"
          height="24"
          width="24"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M47.977,5.99c-4.416,0-8.414,1.792-11.308,4.686l-4.685,4.654l-4.686-4.654 C24.406,7.782,20.408,5.99,15.992,5.99C7.161,5.99,0,13.15,0,21.982c0,4.416,2.85,8.539,5.747,11.432l23.41,23.414 c1.562,1.562,4.092,1.562,5.653,0l23.349-23.352c2.896-2.893,5.81-7.078,5.81-11.494C63.969,13.15,56.808,5.99,47.977,5.99z"
            ></path>
          </g>
        </svg>
        <svg
          @:click="openmenu"
          class="header-bottom__svg-search"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <router-link to="/basket">
          <svg
            class="header-bottom__svg-basket"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="22.5"
            viewBox="0 0 576 512"
          >
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="wrap">
      <router-link to="/">
        <div class="header__logo-link">
          <img
            class="header__logo"
            src="@/assets/img/lowPrice.png"
            alt="logo"
            :class="logoScaled"
          />
        </div>
      </router-link>
    </div>
  </div>
  <div class="header-menu-wrap" v-show="menushow">
    <div class="wrap header-menu__bottom-box flex-center">
      <input
        type="text"
        class="header-menu__input"
        placeholder="Найти товар"
        title="Введите только название продукта"
        id="search"
        v-model="searchValue"
      /><button class="header-menu__btn">
        <svg
          @click="search"
          class="header-menu__svg-btn"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 512 512"
        >
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      menushow: false,
      marginBottom: "",
      marginTop: "",
      logoScaled: "",
      searchValue: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollPage);
    // this.searchProduct("phone X");
  },
  methods: {
    ...mapActions({
      searchProduct: "searchProduct",
    }),
    openmenu() {
      this.menushow = !this.menushow;
      this.menushow
        ? (this.marginBottom = "margin-bottom")
        : (this.marginBottom = "");
    },
    scrollPage() {
      // if (window.scrollY >= 56) this.$refs.headerTop.style.marginTop = `-44px`
      // if (window.scrollY === 0) this.$refs.headerTop.style.marginTop = "0px"
      if (window.scrollY >= 56) {
        this.marginTop = "margin-top";
        this.logoScaled = "logo-scaled";
      }
      if (window.scrollY === 0) {
        this.marginTop = "";
        this.logoScaled = "";
      }
    },
    search() {
      if (this.searchValue) {
        this.searchProduct(this.searchValue);
        this.$router.push(`/search/${this.searchValue}`);
      }
      this.searchValue = "";
      this.openmenu();
    },
  },
  computed: {
    ...mapState({
      navLinks: (state) => state.navLinks,
      userAuth: (state) => state.user.userData.emailLogin,
    }),
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollPage);
  },
};
</script>

<style lang="scss" scoped>
.logo-scaled {
  width: 72px;
  height: 68px;
  padding-left: 40px;
  padding-bottom: 0px;
}
.margin-bottom {
  margin-bottom: -250px;
}
.margin-top {
  margin-top: -44px;
  transition: margin 0.2s;
}
.wrap {
  position: relative;
}
.flex {
  align-items: center;
}
.header-top__auth-txt {
    @media (width < 768px) {
      display: none;
    }
  }
</style>
