<template>
    <div class="goods">
        <div class="sort" ref="sort">
            <ul v-if="list.length">
                <li v-for="(item, index) in list" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div class="foods-list" ref="foodsList">
            <ul v-if="list.length">
                <li v-for="(item, index) in list" :key="index">
                    <h4>{{item.name}}</h4>
                    <ul>
                        <li v-for="(food, index) in item.foods" :key="index">
                            <img :src="food.image" alt="">
                            <div>
                                <h5>{{food.name}}</h5>
                                <p>{{food.price}}e</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from "axios"
    import BScroll from "better-scroll"
    export default {
        name: '',
        data() {
            return {
                list: []
            }
        },
        components: {},
        created() {
            axios.get("/api/goods")
                .then((res) => {
                    if (res.data.errno == 0) {
                        this.list = res.data.data;
                        this.$nextTick(() => {
                            let sort = new BScroll(this.$refs.sort);
                            let foodsList = new BScroll(this.$refs.foodsList)
                        })
                    }
                })
        }
    }

</script>

<style scoped lang="stylus">
    .goods {
        position absolute;
        top 3rem;
        left 0;
        right 0;
        bottom 1.2rem;
        display flex;

        .sort {
            flex 0 0 80px;
            border 1px solid #000;
            overflow hidden;

            ul {
                li {
                    border 1px solid #333;
                    border-left none;
                    border-right none;
                    border-top none;
                    height 1.2rem;
                    text-align center;
                    line-height 1.2rem;
                    font-size 0.3rem;
                    overflow hidden;
                    text-overflow ellipsis;
                    white-space nowrap;
                }
            }
        }

        .foods-list {
            flex 1;
            overflow hidden;

            ul {
                li {
                    margin-bottom 0.2rem;
                    padding-left 0.2rem;

                    h4 {
                        line-height 0.4rem;
                        background-color #eee;
                    }

                    ul {
                        li {
                            display flex;
                            justify-content space-around;

                            img {
                                flex none;
                                margin-right 0.4rem;
                                width 1rem;
                                height 1rem;
                            }

                            div {
                                flex 1;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
