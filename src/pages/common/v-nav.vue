<template>
    <div class="nav">
        <ul>
            <router-link to="/index" tag="li">首页</router-link>
            <router-link to="/nearby" tag="li">附近</router-link>
            <router-link to="/find" tag="li">发现</router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "",
        data() {
            return {};
        },
        components: {}
    };
</script>

<style scoped lang="stylus">
    .nav {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        height: 0.8rem;
        border: 1px solid blue;

        ul {
            display: flex;
            justify-content: space-around;

            li {
                line-height: 0.8rem;
                font-size: 0.48rem;
            }
        }

        .router-link-active {
            color: deeppink;
        }
    }
</style>