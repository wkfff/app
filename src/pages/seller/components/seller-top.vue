<template>
    <div class="seller-top clearfix" @click="showInfo">
        <img :src="list.avatar" alt>
        <div class="header-info">
            <h3>{{list.name}}</h3>
            <p>蜂鸟专送/{{list.deliveryTime}}分钟送达</p>
            <p>
                <supports v-if="list.supports" :classIndex="list.supports[0].type"></supports>
            </p>
        </div>
        <div class="info-wrapper" @click.stop="showInfo" v-show="isShow">
            <star :score="list.score" :size="48"></star>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import Supports from "./supports";
import Star from "./star";
export default {
    name: "",
    data() {
        return {
            list: {},
            isShow: false
        };
    },
    methods: {
        showInfo(e) {
            this.isShow = !this.isShow;
        }
    },
    components: {
        Supports,
        Star
    },
    created() {
        axios.get("/api/seller").then(res => {
            if (!res.data.errno) {
                this.list = res.data.data;
            }
        });
    }
};
</script>

<style scoped lang="stylus">
.seller-top
    display flex
    justify-content space-around
    margin-top 0.2rem
    img
        width 1.5rem
        height 1.5rem
    .hearder-info
        h3, p
            color deeppink
            line-height 1rem
    .info-wrapper
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0, 0, 0, 0.4)
        z-index 200
        text-align center
        color deeppink
        font-size 1rem
</style>
