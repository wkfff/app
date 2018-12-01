<template>
  <div class>
    <swiper :options="swiperOption" v-if="swiperSlides.length">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="'./static/images/' + slide.imgSrc" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import axios from "axios";

export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 2000,
          speed: 1000,
          disableOnInteraction: false
        }
      },
      swiperSlides: []
    };
  },
  created() {
    axios
      .get("http://localhost/index.php", {
        params: {
          field: "imgSrc",
          mark: "banner"
        }
      })
      .then(res => {
        this.swiperSlides = res.data;
      });
  },
  components: {}
};
</script>

<style scoped lang="stylus">
img
  display block
  width 100%
  height auto
</style>