<template>
    <div class="car-wrapper">
        <div class="fixed-con" @click="_ani">
            <div class="fun-icon">
                <span>{{totalCount}}</span>
            </div>
            <div class="total-price">总价: ￥{{totalPrice}}</div>
            <div class="go-fixed">{{descInfo}}</div>
        </div>
        <transition name="move">
            <div class="add-con" v-show="isShow">
                <div class="title">
                    <div>购物车</div>
                    <div>清空</div>
                </div>
                <div class="add-column">
                    <ul>
                        <li v-for="(item, index) in selectedGoods" :key="index">
                            <div class="name">{{item.name}}</div>
                            <div class="price">价格: ￥{{item.price * item.count}}元</div>
                            <div class="num">加减操作</div>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        <transition name="gradient">
            <div class="cover" v-show="isShow" @click="_ani"></div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "",
    props: {
        // 带有默认值及类型验证的属性
        selectedGoods: {
            type: Array,
            default() {
                return [
                    {
                        name: "皮蛋",
                        price: 10,
                        count: 1
                    },
                    {
                        name: "牛肉",
                        price: 6,
                        count: 1
                    },
                    {
                        name: "巧克力",
                        price: 16,
                        count: 3
                    }
                ];
            }
        }
    },
    computed: {
        totalCount() {
            let count = 0;
            if (this.selectedGoods.length) {
                this.selectedGoods.forEach(element => {
                    count += element.count;
                });
            }
            return count;
        },
        totalPrice() {
            let price = 0;
            if (this.selectedGoods.length) {
                this.selectedGoods.forEach(element => {
                    price += element.count * element.price;
                });
            }
            return price;
        },
        descInfo() {
            let str = "";
            if (this.totalPrice == 0) {
                str = `${this.minPrice}元起送`;
            } else if (this.totalPrice < this.minPrice) {
                str = `还差${this.minPrice - this.totalPrice}元起送`;
            } else {
                str = "去结算";
            }
            return str;
        }
    },
    data() {
        return {
            minPrice: 20,
            isShow: false
        };
    },
    components: {},
    methods: {
        _ani() {
            this.isShow = !this.isShow;
        }
    }
};
</script>

<style scoped lang="stylus">
.car-wrapper
    position relative
.fixed-con
    box-sizing border-box
    position fixed
    left 0
    bottom 0
    background-color #434139
    width 100%
    height 1.2rem
    display flex
    justify-content space-between
    align-items center
    padding 0.2rem
    z-index 100
    .fun-icon
        position relative
        width 0.8rem
        height 0.8rem
        background url('/static/images/logo.png') no-repeat
        background-size contain
        span
            position absolute
            right -0.1rem
            top -0.1rem
            width 0.4rem
            height 0.4rem
            text-align center
            line-height 0.4rem
            border-radius 50%
            background-color deeppink
            color #fff
    .total-price
        color #fff
        font-size 0.4rem
    .go-fixed
        font-size 0.4rem
        color #fff
.add-con
    position fixed
    bottom 1.2rem
    left 0
    width 100%
    z-index 50
    background-color #fff
    .title
        display flex
        justify-content space-between
        padding 0 0.2rem
        border-bottom 1px solid #eee
        div
            height 0.8rem
            line-height 0.8rem
            color cyan
            font-size 0.3rem
    .add-column
        ul li
            display flex
            justify-content space-between
            padding 0 0.2rem
            border-bottom 1px solid #eee
            div
                width 25%
                height 0.6rem
                line-height 0.6rem
                color #000
                text-align center
                font-size 0.25rem
.move-enter-active, .move-leave-active
    transition all 0.5s
.move-enter, .move-leave-to
    transform translate3d(0, 100%, 0)
.cover
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 10
    background-color #000
    opacity 0.7
.gradient-enter-active, .gradient-leave-active
    transition all 0.5s
.gradient-enter, .gradient-leave-to
    opacity 0
</style>
