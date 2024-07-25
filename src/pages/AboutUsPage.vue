<template>
  <div class="wrap flex">
    <div class="about">
      <h2 class="cabin-700 about__headding">О Магазине</h2>
      <p class="oxygen-regular about__text">
        Приветствуем на официальном сайте онлайн шопа "Low price"!
      </p>
      <p class="oxygen-regular about__text">
        Тут мы Вам расскажем про наши преимущества а так же о выгодах приобретать товары в нашем магазине!
      </p>
      <p class="oxygen-regular about__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        explicabo, soluta facilis rerum id exercitationem beatae veritatis nam
        eos. Nesciunt quasi quos, vero quo repudiandae non voluptate facere
        voluptatum, nihil eaque rem fugit odio optio magnam. Aspernatur
        assumenda animi eum, quasi quo incidunt quidem ipsa, amet delectus enim
        suscipit ducimus sequi sint deserunt corrupti optio laborum? Totam hic
        deleniti iste, amet voluptas debitis, odio sequi architecto vero magni
        quis. Suscipit assumenda tempore, sint incidunt odio culpa facere? Nisi
        inventore ea aperiam iste. Dolor est nesciunt excepturi facilis
        dignissimos ipsam illum. Necessitatibus sunt provident vitae
      </p>
      <p class="oxygen-regular about__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At impedit
        dignissimos voluptas enim laudantium architecto qui suscipit repellat, a
        cum veniam rem autem eligendi natus, laborum quisquam possimus voluptate
        ex eveniet facere! Architecto dolorum voluptates sunt commodi at fugit
        ipsum placeat cum dolor, beatae non, tempore autem ratione evenie
      </p>
    </div>
    <img
      class="about__img"
      src="https://img.freepik.com/free-photo/front-view-screaming-woman-showing-banner-sale_329181-7369.jpg?t=st=1721340260~exp=1721343860~hmac=75696a307002bb733c88920eca7da65df30f489e7756eb0286cc0a29985639d6&w=360"
      alt="О нас"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  color: #000;
  width: 50%;
  @media (width < 1200px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (width < 540px) {
    width: 100%;
  }

  &__headding {
    padding-top: 46px;
    @media (width < 768px) {
    font-size: 36px;
  }
  }
  &__text {
    padding-top: 32px;
  }
  &__img {
    padding-top: 46px;
    padding-right: 150px;
    @media (width < 1200px) {
      padding-right: 16px;
    }
    @media (width < 768px) {
      width: 220px;
      height: 350px;
      padding-top: 116px;
    }
    @media (width < 540px) {
      display: none;
    }
  }
}
</style>
