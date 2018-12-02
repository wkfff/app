<template>
    <div class="main">
        <ul v-if="list.length">
            <router-link :to="'/seller/' + item.id" tag="li" v-for="(item, index) in list" :key="index" class="clearfix">
                <img :src="'/static/images/' + item.imgSrc" alt="">
                <div class="info">
                    <h4>商家名称: {{item.title}}</h4>
                    <p>销量: {{item.amount}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: '',
        data() {
            return {
                list: []
            }
        },
        components: {},
        created() {
            this.list = [{
                id: "001",
                imgSrc: "index-banner1.jpg",
                title: "麦当劳",
                amount: 500
            }, {
                id: "002",
                imgSrc: "index-banner2.jpg",
                title: "德克士",
                amount: 300
            }, {
                id: "003",
                imgSrc: "index-banner3.jpg",
                title: "肯德基",
                amount: 200
            }]
        }
    }

</script>

<style scoped lang="stylus">
    .main {
        ul {
            li {
                display: flex;
                justify-content space-around;
                margin-bottom 0.4rem;
                border: 1px solid deeppink;

                img {

                    width 2rem;
                    height 1rem;
                }

                .info {
                    line-height 0.5rem;
                }
            }
        }
    }

</style>
