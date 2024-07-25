<template>
  <button class="green-button"><slot></slot></button>
</template>

<script></script>

<style lang="scss" scoped>
.green-button {
  padding: 10px 32px;
  min-width: 120px;
  border-width: 0;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px #021;
  background-image: linear-gradient(180deg, #12d0a7, #12d0a7);
  color: #005e37;
  transition-property: background, color, border-color;
  transition-timing-function: linear;
  transition-duration: 0.2s;
  transition-delay: 0s;
  font-weight: 400;
}
.green-button:hover {
  background-image: linear-gradient(180deg, #126d73, #358f64);
  color: #fff;
}
.green-button:active {
  background-image: linear-gradient(180deg, #128567, #0c6448);
  color: #fff;
}
</style>
