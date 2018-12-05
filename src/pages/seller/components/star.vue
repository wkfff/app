<template>
    <div class="star-wrapper">
        <div :class="'star-' + size">
            <span v-for="(item, index) in turnStar" class="star-item" :class="item" :key="index"></span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "",
    data() {
        return {};
    },
    components: {},
    props: ["score", "size"],
    computed: {
        turnStar() {
            // 定义一个空数组, 用来存放星星的状态
            let arr = [];
            // 处理传过来的分数, 保证只有三种星星的状态
            let score = Math.floor(this.score * 2) / 2; //保证输出结果只能是n, n.5, n+1

            // 定义一个变量, 用来判断处理后的score是否为整数, 如果不是整数, 证明存在n.5的情况, 需要
            // 向数组中添加一个half的状态
            let hasDecimal = score % 1 != 0;

            // 用来判断有几个整星
            let temp = Math.floor(score);

            // 添加整星
            for (let i = 0; i < temp; i++) {
                arr.push("on");
            }

            // 判断是否添加半星
            if (hasDecimal) {
                arr.push("half");
            }

            // 一共会显示5颗星, 如果数组的长度小于5, 则添加状态为off的星星
            while (arr.lenth < 5) {
                arr.push("off");
            }

            return arr;
        }
    }
};
</script>

<style scoped lang="stylus">
.star-wrapper
    .star-48
        .star-item
            display inline-block
            width 0.4rem
            height 0.38rem
            &.on
                background url('./../images/star48_on@2x.png')
                background-size 0.4rem 0.38rem
            &.half
                background url('./../images/star48_half@2x.png')
                background-size 0.4rem 0.38rem
            &.off
                background url('./../images/star48_off@2x.png')
                background-size 0.4rem 0.38rem
    .star-36
        .star-item
            display inline-block
            width 0.3rem
            height 0.29rem
            &.on
                background url('./../images/star36_on@2x.png')
                background-size 0.3rem 0.29rem
            &.half
                background url('./../images/star36_half@2x.png')
                background-size 0.3rem 0.29rem
            &.off
                background url('./../images/star36_off@2x.png')
                background-size 0.3rem 0.29rem
    .star-24
        .star-item
            width 0.2rem
            height 0.19rem
            display inline-block
            &.on
                background url('./../images/star24_on@2x.png')
                background-size 0.2rem 0.19rem
            &.half
                background url('./../images/star24_half@2x.png')
                background-size 0.2rem 0.19rem
            &.off
                background url('./../images/star24_off@2x.png')
                background-size 0.2rem 0.19rem
</style>
