<template>
  <div class="oxygen-regular product__size">
    <p class="defult" @click="showOptions = !showOptions">{{ selectedOptions }}</p>
    <div class="options" v-show="showOptions">
      <p v-for="(option, index) in options" :key="index" 
      class="option"
      @click="selectSize(option.name)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data() {
    return {
      showOptions: false,
      selectedOptions: "Выбрать размер",
    };
  },
  methods: {
    selectSize(value) {
      this.showOptions = false;
      this.selectedOptions = value;
      this.$emit("selectSize", this.selectedOptions);
    }
  },
};
</script>

<style lang="scss" scoped>
.defult {
  position: relative;
  width: 150px;
  padding: 10px 32px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border-radius: 0;
  background-image: linear-gradient(180deg, #12d0a7, #12d0a7);
}
.options {
  position: absolute;
  width: 214px;
  box-sizing: border-box;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid #12d0a7;
}
.option {
  padding-top: 5px;
  padding-bottom: 5px;
}
.option:hover {
  background-color: #9de7d7;
}
</style>
