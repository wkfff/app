<template>
    <div class="goods">
        <div class="sort" ref="sort">
            <ul v-if="list.length">
                <li
                    v-for="(item, index) in list"
                    :key="index"
                    :class="calcIndex == index ? 'active' : ''"
                    @click="_scrllTo(index)"
                    ref="menuList"
                >{{item.name}}</li>
            </ul>
        </div>
        <div class="foods-list" ref="foodsList">
            <ul v-if="list.length">
                <li v-for="(item, index) in list" :key="index" ref="foodSort">
                    <h4>{{item.name}}</h4>
                    <ul>
                        <li v-for="(food, index) in item.foods" :key="index">
                            <!-- <img :src="food.image" alt> -->
                            <div>
                                <h5>名称: {{food.name}}</h5>
                                <div class="con-panel">
                                    <div>价格: {{food.price}}</div>
                                    <plus-minus :food="food" :selectedGoods="selectedGoods"></plus-minus>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shop-car :selectedGoods="selectedGoods"></shop-car>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import BScroll from "better-scroll";
import ShopCar from "./shop-car";
import PlusMinus from "./plus-minus";

export default {
    name: "",
    data() {
        return {
            list: [],
            foodSort: [0],
            scrollY: 0,
            selectedGoods: []
        };
    },
    components: {
        ShopCar,
        PlusMinus
    },
    created() {
        axios.get("/api/goods").then(res => {
            if (res.data.errno == 0) {
                this.list = res.data.data;
                this.list.forEach(el => {
                    el.foods.forEach(ele => {
                        this.$set(ele, "count", 0);
                    });
                });
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculate();
                });
            }
        });
    },
    methods: {
        // 初始化滚动插件
        _initScroll() {
            this.sort = new BScroll(this.$refs.sort, {
                click: true
            });
            this.foodsList = new BScroll(this.$refs.foodsList, {
                probeType: 3,
                click: true
            });
            // let allLi = this.$refs.sort.children[0].children;
            this.foodsList.on("scroll", pos => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
        },
        // 计算每个食物分类下的元素高度
        _calculate() {
            this.$refs.foodSort.forEach((item, index) => {
                this.foodSort.push(this.foodSort[index] + item.clientHeight);
            });
            //  [0, 620, 700, 780, 980, 1120, 1260, 1460, 1780, 2160]
        },
        _scrllTo(index) {
            this.foodsList.scrollToElement(this.$refs.foodSort[index], 300);
        },
        _initLeftScroll(index) {
            let menu = this.$refs.menuList;
            let el = menu[index];
            this.sort.scrollToElement(el, 300, 0, -300);
        }
    },
    computed: {
        // 根据当前元素滚动高度判断返回的索引
        calcIndex() {
            let cur = 0;
            for (var i = 0; i < this.foodSort.length - 1; i++) {
                if (
                    this.scrollY >= this.foodSort[i] &&
                    this.scrollY < this.foodSort[i + 1]
                ) {
                    cur = i;
                    this._initLeftScroll(cur);
                    break;
                }
            }
            if (this.scrollY >= 1700) {
                cur = this.foodSort.length - 2;
            }

            return cur;
        }
    }
};
</script>

<style scoped lang="stylus">
.goods
    position absolute
    top 3rem
    left 0
    right 0
    bottom 1.2rem
    display flex
    .sort
        flex 0 0 80px
        border 1px solid #000
        overflow hidden
        ul
            li
                border 1px solid #333
                border-left none
                border-right none
                border-top none
                height 1.2rem
                text-align center
                line-height 1.2rem
                font-size 0.3rem
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                &.active
                    background-color orangered
                    color #fff
    .foods-list
        flex 1
        overflow hidden
        ul
            li
                padding-bottom 0.2rem
                padding-left 0.2rem
                h4
                    line-height 0.4rem
                    background-color #eee
                    text-align center
                    line-height 0.6rem
                    height 0.6rem
                    color #333
                    font-size 0.4rem
                ul
                    li
                        display flex
                        justify-content space-around
                        img
                            flex none
                            margin-right 0.4rem
                            width 1rem
                            height 1rem
                        div
                            flex 1
                            display flex
                            flex-direction column
                            justify-content space-around
                            .con-panel
                                display flex
                                flex-direction row
                                align-items center
                                justify-content space-between
                                .panel
                                    display block
</style>
