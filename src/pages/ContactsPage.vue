<template>
  <div class="wrap contacts">
    <h2 class="cabin-700 contacts__title">Контакты</h2>
    <div class="flex column">
      <div>
        <p class="oxygen-regular contacts__text">Вы можете найти нас здесь:</p>
        <div>
          <iframe
            class="contacts__map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3d28ea7daf7069434caefee94f6d763e9436eab326ec9271762c1f26141a288d&amp;source=constructor"
            
            frameborder="1"
          ></iframe>
        </div>
      </div>
      <div class="contacts__box">
        <p class="oxygen-regular contacts__text">
          Время работы: понедельник—воскресенье с 10:00 до 22:00.
        </p>
        <p class="oxygen-regular contacts__text">Телефон: +7 960 147 29 70</p>
        <p class="oxygen-regular contacts__text">
          Email: afanas.lg2@gmail.com
        </p>
        <p class="oxygen-regular contacts__text">
          Адрес: ул. Петровка, д. 2, г. Москва
        </p>
        <p class="oxygen-regular contacts__text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contacts {
  color: #000;
  @media (width < 540px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  &__title {
    padding-top: 46px;
    padding-bottom: 30px;
  }
  &__text {
    padding-bottom: 24px;
  }
  &__map {
    width:600px;
    height:350px;
    @media (width < 1200px) {
      width: 500px;
    }
    @media (width < 1024px) {
      width: 400px;
      padding-right: 20px;
    }
    @media (width < 768px) {
      width: 330px;
      height: 280px;
    }
    @media (width < 540px) {
      width: 300px;
      padding-right: 0;
    }

  }
  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.column {
  @media (width < 540px) {
    flex-direction: column;
  }
}
</style>
