<template>
   <div class="top">
       <div class="temperature">温度</div>
       <div class="addr">郑州市</div>
       <div class="search">搜索</div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
    .top{
        display flex
        justify-content space-around
        background-color orangered
        div{
            font-size 0.6rem
            color #fff
            line-height 0.8rem
        }
    }
</style>
