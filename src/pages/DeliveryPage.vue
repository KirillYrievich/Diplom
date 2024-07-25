<template>
  <div class="wrap">
    <div class="center">
      <div>
        <h2 class="cabin-700 delivery__headding">Условия доставки</h2>
        <div class="delivery__bkg"></div>
      </div>
      <div class="delivery">
        <p class="oxygen-regular delivery__text">
          Доставка заказов курьерскими службами СДЭК и Boxberry
        </p>
        <p class="oxygen-regular delivery__text">
          Вы сами выбираете удобный способ доставки заказанных товаров!
        </p>
        <p class="oxygen-regular delivery__text">Варианты доставки:</p>
        <ul>
          <li class="oxygen-regular delivery__text">
            Воспользоваться курьерской доставкой прямо «до двери».
          </li>
          <li class="oxygen-regular">
            Получить свой заказ в пункте выдачи заказов СДЭК*
          </li>
          <li class="oxygen-regular">
            Получить свой заказ в пункте выдачи заказов Boxberry*
          </li>
        </ul>
        <p class="oxygen-regular delivery__text">
          Заказы, оформленные и оплаченные до 18:00 доставляются в тот же день.
        </p>
        <p class="oxygen-regular delivery__text">
          Заказы, оформленные и оплаченные после 18:00 доставляются на следующий
          день.
        </p>
        <p class="oxygen-regular delivery__text">
          Подготовка заказа к выдаче занимает от 30 минут до 2 часов с момента
          оплаты заказа на сайте.
        </p>
        <p class="oxygen-regular delivery__text">
          Уведомление о готовности заказа будет направлено на ваш e-mail.
        </p>
        <p class="oxygen-regular delivery__text">
          Для забора заказа необходимо при себе иметь документ, удостоверяющий
          личность. Оплатить свой заказ вы можете на нашем сайте через платежную
          систему «Сбербанк» или через Сервис оплаты покупок равными частями -
          Подели .
        </p>
      </div>
    </div>
  </div>
</template>
<!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af86668ee3a3aef21a5624922ab9565474774ff70379931d001b389e157d1bb44&amp;width=700&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script> -->
<script>
export default {};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (width < 1024px) {
    align-items: baseline;
  }
  @media (width < 768px) {
    flex-direction: column;
  }
}
.delivery {
  color: #000000;
  width: 48%;
  flex-direction: column;
  padding-left: 75px;
  @media (width < 768px) {
    width: 92%;
    padding-left: 16px;
  }

  &__bkg {
    width: 48%;
    padding-top: 102%;
    padding-left: 55%;
    background-image: url("https://img.freepik.com/free-photo/front-view-delivery-man-with-package_23-2148684711.jpg?t=st=1710235165~exp=1710238765~hmac=75543bff77f2dc73500d7bcf1dab0d728f470243b330e834596c5148fb18d9bc&w=826");
    @media (width < 768px) {
      width: 44.5%;
    }

  }
  &__headding {
    color: #000000;
    padding-top: 46px;
    padding-bottom: 35px;
  }
  &__text {
    padding-top: 32px;
  }
  &__img {
    width: 100%;
    height: min-content;
  }
}
</style>
