<template>
   <div class="carousel">
        <swiper :options="swiperOption" v-if="list.length">
            <swiper-slide v-for="(item,index) in list" :key="index"><img :src="'/static/images/' + item.imgUrl"></swiper-slide>
        </swiper>
   </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
export default {
   name: '',
   data() {
       return {
           swiperOption: {//swiper3
                autoplay: {
                    delay: 3000
                },
                loop: true
            },
            list:[]
       }
   },
  components: {},
  created(){
      //向后台发起请求，获取轮播图信息
      this.list = [
          {
              id: "001",
              imgUrl: '1.jpg'
          },
          {
              id: "002",
              imgUrl: '2.jpg'
          },
          {
              id: "003",
              imgUrl: '3.jpg'
          },
      ]
  }
}
</script>

<style scoped lang="stylus">
</style>
