<template>
    <div class="view" ref="ratingsWrapper">
        <div class="ratings-wrapper">
            <div class="ratings-header">
                <div class="detail">
                    <div>商家: {{sellerInfo.name}}</div>
                    <div>综合评分: {{sellerInfo.score}}</div>
                </div>
                <div class="star-panel">
                    <star :size="36" :score="sellerInfo.score"></star>
                </div>
            </div>
            <blank></blank>
            <div class="ratings">
                <ul v-if="ratingsCon.length">
                    <li v-for="(item, index) in ratingsCon" :key="index">
                        <div class="left">
                            <img :src="item.avatar" alt>
                        </div>
                        <div class="right">
                            <div class="username">{{item.username}}</div>
                            <star :score="item.score" :size="24"></star>
                            <div class="ratingsTxt">{{item.text}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import Star from "./star";
import Blank from "./blank";
import BScroll from "better-scroll";
export default {
    name: "",
    data() {
        return {
            sellerInfo: {},
            ratingsCon: []
        };
    },
    components: {
        Star,
        Blank
    },
    created() {
        axios.get("/api/seller").then(res => {
            if (res.data.errno == 0) {
                this.sellerInfo = res.data.data;
            }
        });
        axios.get("/api/ratings").then(res => {
            if (res.data.errno == 0) {
                this.ratingsCon = res.data.data;
            }
            this.$nextTick(() => {
                this.ratingsScroll = new BScroll(this.$refs.ratingsWrapper);
            });
        });
    }
};
</script>

<style scoped lang="stylus">
.view
    position absolute
    top 3rem
    left 0
    bottom 0
    width 100%
    overflow hidden
    .ratings-wrapper
        .ratings-header
            display flex
            justify-content space-around
            height 1.6rem
            line-height 0.8rem
            border-radius 10px
            border 1px solid #ddd
        .detail
            font 0.6rem
    .ratings
        padding 0 0.2rem
        li
            display flex
            height 1.4rem
            padding-top 0.3rem
            border-bottom 1px solid #999
            .left img
                width 0.8rem
                height auto
                border-radius 50%
            .right
                margin-left 0.4rem
                div
                    margin-bottom 0.1rem
</style>
