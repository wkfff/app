<template>
    <i :class="'icon ' + classMap[classIndex]"></i>
</template>

<script type="text/ecmascript-6">
export default {
    props: ["classIndex"],
    name: "",
    data() {
        return {
            classMap: [
                "decrease",
                "discount",
                "guarantee",
                "invoice",
                "special"
            ]
        };
    },
    components: {}
};
</script>

<style scoped lang="stylus">
@import '../../../assets/css/mixin.styl'
.icon
    display inline-block
    width 0.32rem
    height 0.32rem
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
