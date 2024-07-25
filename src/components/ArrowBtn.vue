<template>
    <a :href="btnlink" :class="btnclass">
        <svg
          :width="btnwidth"
          :height="btnheight"
          viewBox="0 0 10.0041 20.0081"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M1.00403 19.004L9.00403 10.004L1.00403 1.00403"
            stroke="#292F36"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>
    </a>
</template>

<script>
export default {
    props: ['btnclass', 'btnwidth', 'btnheight', 'btnlink'],
};
</script>

<style lang="scss">

</style>
