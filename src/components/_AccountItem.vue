<template>
  <li @click="active ? active='' : active='active'" :class="active">
    {{ value }}
  </li>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      active: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-image: linear-gradient(180deg, #12d0a7, #12d0a7);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
</style>
