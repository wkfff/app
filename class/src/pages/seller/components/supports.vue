<template>
   <i class="icon" :class="classMap[classType]"></i>
</template>

<script type="text/ecmascript-6">
export default {
    props: ['classType'],
   name: '',
   data() {
       return {
           classMap : ['decrease','discount','guarantee','invoice','special']
       }
   },
  components: {}
}
</script>

<style scoped lang="stylus">
@import "../../../assets/css/mixin"
.icon 
    display inline-block
    width .32rem
    height 0.32rem
    border 1px solid #000
    &.decrease
        bg-image('decrease')
    &.discount
        bg-image('discount')
    &.guarantee
        bg-image('guarantee')
    &.invoice
        bg-image('invoice')
    &.special
        bg-image('special')


</style>
