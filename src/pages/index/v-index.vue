<template>
    <div class="main">
        <div class="header base">首页</div>
        <v-nav></v-nav>
        <router-link to="/snack">外卖</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
import VNav from "@/pages/common/v-nav";
import "@/assets/css/main.styl";
import axios from "axios";

// jsonp用
import Vue from "vue";
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp);

export default {
    name: "",
    data() {
        return {};
    },
    components: {
        VNav
    },
    created() {
        // 测试mockjs用
        // axios.get("http://localhost/php/index.php?imgSrc=guess").then(res => {
        //     console.log(res.data);
        // });
        // 测试跨域请求代理用(配合config文件夹下index.js中proxyTable进行配置)
        // axios
        //     .post("/api/php/index.php?field=imgSrc&mark=guess")
        //     .then(function(response) {
        //         console.log(response);
        //     });

        // 测试jsonp用(不需要传callback函数, 内部已封装好)
        this.$jsonp(
            "https://sug.so.360.cn/suggest?word=a&encodein=utf-8&encodeout=utf-8&pq=&t=2574587"
        ).then(res => {
            console.log(res);
        });
    }
};
</script>

<style scoped lang="stylus">
.header
    background-color cyan
</style>
