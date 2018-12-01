<template>
   <div class="main">
       <index-top></index-top>
       <carousel></carousel>
       <div class="icon">
           <router-link to="/outfood">外卖</router-link>
       </div>
       <v-nav></v-nav>
   </div>
</template>

<script type="text/ecmascript-6">
import VNav from '@/pages/common/v-nav'
import IndexTop from 'vindex/index-top'
import Carousel from 'vindex/carousel'
import NavIcon from 'vindex/nav-icon'
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      VNav,
      IndexTop,
      Carousel
  }
}
</script>

<style scoped lang="stylus">
    .header 
        width 3.75rem
        height 1rem
        background-color #f00
</style>
