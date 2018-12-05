<template>
   <div class="control-wrapper">
       <span v-show="isShow" @click="_reduce" v-if="food.count">-</span>
       <span v-show="isShow" v-if="food.count">{{food.count}}</span>
       <span @click="_add">+</span>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   props: ['food','selectedAll'],
   data() {
       return {
           isShow: false,
           count: 1
       }
   },
  components: {},
  created(){
      if (this.food.count){
          this.isShow = true
        //   this.count = this.food.count
      }
  },
  methods:{
      _add(){
          this.isShow = true
          //第一次添加一个商品，没有count属性，要添加一个count属性，值为1
          //多次购买同一个商品，应该在原有count值的基础上+1
          //同时，要把购买商品的最新动态反馈到父组件的selectedAll数据中
          if (!this.food.count){
              this.$set(this.food,"count",1)
          }else{
              let newCount = this.food.count + 1
              this.$set(this.food,"count", newCount)
          }
        let flag = true
          for(let i = 0; i < this.selectedAll.length; i++){
              if (this.food.name == this.selectedAll[i].name){
                  flag = false
              }
          }
          if (flag){
              this.selectedAll.push(this.food)
          }
          
      },
      _reduce(){
          let newCount = this.food.count - 1
              this.$set(this.food,"count", newCount)
              if (newCount == 0){
                  this.isShow = false
              }
      }
  }

}
</script>

<style scoped lang="stylus">
.control-wrapper
    position absolute
    right 0.1rem
    top 0.1rem
    span 
        display inline-block
        text-align center
        width 0.4rem
        height 0.4rem
        border-radius 50%
        border 1px solid #000
</style>
