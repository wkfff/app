<template>
   <div class="">
       <div class="seller-top" @click="handlebox">
            <p class="avatar"><img :src="seller.avatar" alt=""></p>
            <p>商家名称：{{seller.name}}</p>
            <p>{{seller.description}}/派送时间:{{seller.deliveryTime}}</p>
       </div>
       <div class="nav">
         <router-link to="/seller/goods">商品</router-link>
         <router-link to="/seller/ratings">评论</router-link>
         <router-link to="/seller/sellerdesc">商家</router-link>
       </div>
       <router-view></router-view>
       <div class="mask" v-show="isShow" @click="handlebox">
             <mask1 :seller="seller"></mask1>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import Mask1 from './components/mask'
export default {
   name: '',
   data() {
       return {
         seller: {},
         isShow: false
       }
   },
  components: {
    Mask1
  },
  methods: {
    handlebox(){
      this.isShow =!this.isShow
    }
  },
  watch: {
       '$route': {
            handler: function(){
              console.log(this.$route.params);
            },
            immediate: true  //（立刻）
          }

  },
  created(){
    axios.get('/api/seller').then((res)=>{
      var localData = res.data;
      if (localData.errno == 0){
        this.seller = localData.data
      }
    })
    // 编程式导航
    this.$router.push({
      path: '/seller/goods'
    })

  }

}
</script>

<style scoped lang="stylus">
.seller-top
  height 1.5rem
  background-color #f00
  .avatar
    img
      width 0.5rem
      height 0.5rem
.mask 
  position fixed
  width 100%
  height 100%
  left 0
  top 0
  background rgba(0,0,0,.5)
  z-index 9999
.nav 
  height 0.8rem
  background-color #0ff
</style>
