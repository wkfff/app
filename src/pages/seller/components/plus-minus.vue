<template>
    <div class="panel clearfix">
        <div class="same-sty" v-show="isShow" @click="_reduce">
            <div class="minu base-sty"></div>
        </div>

        <div class="same-sty num" v-show="isShow">{{food.count}}</div>

        <div class="same-sty plus" @click="_add">
            <div class="plus1 base-sty"></div>
            <div class="plus2 base-sty rotate-sty"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: ["selectedGoods", "food"],
    name: "",
    data() {
        return {
            isShow: false,
            index: 0,
            len: 0
        };
    },
    components: {},
    created() {
        if (this.food.count) {
            this.isShow = true;
        }
    },
    methods: {
        _add() {
            this.isShow = true;

            ++this.food.count;

            let flag = true;

            for (let i = 0; i < this.selectedGoods.length; i++) {
                // 如果存在
                if (this.selectedGoods[i].name == this.food.name) {
                    this.index = i;
                    flag = false;
                }
            }

            // 如果不存在当前商品
            if (flag) {
                this.selectedGoods.push(this.food);
                this.index = this.selectedGoods.length - 1;
                this.len = this.selectedGoods.length;
            }
        },
        _reduce() {
            --this.food.count;
            // 如果减到0
            if (!this.food.count) {
                this.isShow = false;
                this.selectedGoods.splice(this.index, 1, {
                    price: 0,
                    count: 0
                });
            }
        }
    },
    updated() {
        if (!this.food.count) {
            this.isShow = false;
        }
    }
};
</script>

<style scoped lang="stylus">
.panel
    box-sizing border-box
    padding 0 0.3rem
    position relative
    .same-sty
        float left
        width 0.4rem
        height 0.4rem
        line-height 0.4rem
        border-radius 50%
        text-align center
        color #fff
        font-size 0.3rem
        font-weight bolder
        background-color deepskyblue
        position relative
        .base-sty
            width 0.25rem
            height 0.06rem
            background-color #fff
            position absolute
            left 50%
            top 50%
            transform translate(-50%, -50%)
        .rotate-sty
            transform translate(-50%, -50%) rotate(90deg)
    .plus
        float right
    .num
        position absolute
        left 50%
        transform translate(-50%, 0)
</style>
