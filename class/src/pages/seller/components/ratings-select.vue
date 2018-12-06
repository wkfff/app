<template>
   <div class="select-wrapper">
       <!-- <span :class="selectType == 2?'active':''" @click="changeType(2)">全部{{ratings.length}}</span>
       <span :class="selectType == 0?'active':''" @click="changeType(0)">满意{{positive.length}}</span>
       <span :class="selectType == 1?'active':''" @click="changeType(1)">不满意{{negative.length}}</span> -->
       <span 
            v-for="(item,index) in optiondesc" 
            :class="selectType == item.type?'active':''" 
            @click="changeType(item.type)" 
            :key="index"
        >{{item.desc}}{{count(item.type)}}</span>
   </div>
</template>

<script type="text/ecmascript-6">
// 需求分析：
// 1、每个选项在选中时，有激活样式
// 2、 选中类型：   全部 2  满意 0  不满意 1  （默认是2）
export default {
   name: '',
   props: ['ratings','optiondesc'],
   data() {
       return {
           selectType: 2
       }
   },
  components: {},
  methods: {
      changeType(type){
          this.selectType = type
          this.$emit("change",type)
      },
      count(type){
          if (type == 2){
              return this.ratings.length
          }else{
              let arr = this.ratings.filter((el)=>{
                  if (el.rateType == type){
                      return true
                  }else{
                      return false
                  }
              })
              return arr.length
          }
      }
  },
  computed: {
    //   positive(){
    //     //   数据方法：filter 
    //       let arr = this.ratings.filter((el)=>{
    //           if (el.rateType == 0){
    //               return true
    //           }else{
    //               return false
    //           }
    //       })
    //       return arr
    //   },
    //   negative(){
    //       //   数据方法：filter 
    //       let arr = this.ratings.filter((el)=>{
    //           if (el.rateType == 1){
    //               return true
    //           }else{
    //               return false
    //           }
    //       })
    //       return arr
    //   }
  }
}
</script>

<style scoped lang="stylus">
.select-wrapper
    width 100%
    height 1rem
    span
        display inline-block
        width 1rem
        height .8rem
        background-color #aaa
        &.active
             background-color #f0f!important
</style>
