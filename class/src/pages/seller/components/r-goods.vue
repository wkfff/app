<template>
   <div class="goods">
       <div class="menu-wrapper" ref="menuWrapper">
           <ul v-if="goods.length">
               <li 
                    v-for="(item,index) in goods" 
                    :key="index"
                >{{item.name}}</li>
           </ul>
       </div>
       <div class="foodlist-wrapper" ref="foodlistWrapper">
           <ul v-if="goods.length">
               <li v-for="(item,index) in goods" 
                    :key="index">
                   <h3>{{item.name}}</h3>
                   <ul>
                       <li v-for="(food,index) in item.foods" :key="index">
                           <p>菜名:{{food.name}}</p>
                           <p>价格:{{food.price}}</p>
                       </li>
                   </ul>
               </li>
           </ul>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
   name: '',
   data() {
       return {
           goods: []
       }
   },
  components: {},
  created(){
      axios.get('/api/goods').then((res)=>{
          let localData = res.data
          if (localData.errno == 0){
              this.goods = localData.data
            //   当数据更新后，模板再次渲染完毕后才会执行$nextTick里面的回调
            //   延迟执行
              this.$nextTick(()=>{
                  let menuScroll = new BScroll(this.$refs.menuWrapper)
                  let foodlistScroll = new BScroll(this.$refs.foodlistWrapper)
              })
              
          }
      })
  }
}
</script>

<style scoped lang="stylus">
.goods 
    position absolute
    left 0
    top 2.3rem
    bottom 1rem
    width 100%
    overflow hidden
    display flex
.menu-wrapper
    flex 0 0 80px
    border 1px solid #000
    ul
        li
            border 1px solid #000
            height 1.5rem
.foodlist-wrapper
    flex 1
    ul
        li
            h3 
                height 0.8rem
                background-color #aaaaaa
            ul 
                li
                    border 1px solid #000
                    height 2rem

</style>
