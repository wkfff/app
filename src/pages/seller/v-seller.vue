<template>
    <div class>
        <router-link tag="h3" to="/snack">&lt;返回</router-link>
        <seller-top></seller-top>
        <div class="turn-nav">
            <router-link to="/seller/r-goods">商品</router-link>
            <router-link to="/seller/r-ratings">评论</router-link>
            <router-link to="/seller/r-info">详情</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
import SellerTop from "./components/seller-top";

export default {
    name: "",
    data() {
        return {};
    },
    components: {
        SellerTop
    },
    watch: {
        $route: {
            handler() {},
            immediate: true
        }
    },
    created() {
        // 编程式导航   模板编译之前指定路由导航
        this.$router.push({
            path: "/seller/r-ratings"
        });
    }
};
</script>

<style scoped lang="stylus">
.turn-nav
    display flex
    justify-content space-around
    height 1rem
    line-height 1rem
    font-size 0.4rem
    color #000
    font-weight bold
</style>
