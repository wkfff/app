<template>
   <div class="star-wrapper">
       <div :class="classType">
            <span v-for="(item,index) in itemClass" :key="index" :class="item" class="star-item"></span>
        </div>
        <!-- <div class="star-48">
                <span class="on" class="star-item"></span>
                <span class="on" class="star-item"></span>
                <span class="on" class="star-item"></span>
                <span class="half" class="star-item"></span>
                <span class="off" class="star-item"></span>
        </div> -->
   </div>
</template>


<script type="text/ecmascript-6">
export default {
   name: '',
   props: ['size','score'],  //48,  3.6
   data() {
       return {}
   },
  components: {},
  computed: {
      classType(){
          return 'star-' + this.size
      },
      itemClass(){
        //   3.6    3.5  3.9
          let result = []   // ['on', 'on', 'on','half','off']
          let score = Math.floor(this.score * 2)/2  // 3  3.5    4
          let hasDecimal = score%1 != 0
          let int = Math.floor(score)  // 3
          for (let i = 0; i < int; i++){
              result.push('on')
          }
          if (hasDecimal){
              result.push('half')
          }
          while(result.length < 5){
              result.push('off')
          }
          return result
      }
  }
}

</script>

<style scoped lang="stylus">
.star-wrapper
    .star-48
        .star-item
            display inline-block
            width 0.4rem
            height 0.38rem
            &.on
                background url(../starImg/star48_on@2x.png)
                background-size .4rem .38rem
            &.half
                background url(../starImg/star48_half@2x.png)
                background-size .4rem .38rem
            &.off
                background url(../starImg/star48_off@2x.png)
                background-size .4rem .38rem
    .star-36   
        .star-item      
            display inline-block  
            width 0.3rem
            height 0.29rem
            &.on
                background url(../starImg/star36_on@2x.png)
                background-size .3rem .29rem
            &.half
                background url(../starImg/star36_half@2x.png)
                background-size .3rem .29rem
            &.off
                background url(../starImg/star36_off@2x.png)
                background-size .3rem .29rem
    .star-24
        .star-item 
            width 0.2rem
            height 0.19rem
            display inline-block  
            &.on
                background url(../starImg/star24_on@2x.png)
                background-size .2rem .19rem
            &.half
                background url(../starImg/star24_half@2x.png)
                background-size .2rem .19rem
            &.off
                background url(../starImg/star24_off@2x.png)
                background-size .2rem .19rem
</style>

