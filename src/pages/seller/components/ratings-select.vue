<template>
    <div class="select-wrapper" v-if="ratingscon.length">
        <span
            v-for="(item, index) in type"
            :key="index"
            :class="selectType == item.typeCode ? 'on' : ''"
            @click="_changeType(item.typeCode)"
        >{{item.typeDesc}}{{_count(item.typeCode)}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "",
    props: ["type", "ratingscon"],
    data() {
        return {
            selectType: 2
        };
    },
    components: {},
    methods: {
        _changeType(typeCode) {
            this.selectType = typeCode;
            this.$emit("changetype", typeCode);
        },
        _count(data) {
            if (data == 2) {
                // 传入filterData(过滤后的数据)时, 当选择满意的时候, 最多也就18条数据, 所以props传入的必须是所有的评论数据
                return this.ratingscon.length;
            } else {
                let tempData = this.ratingscon.filter(el => {
                    if (data == el.rateType) {
                        return true;
                    }
                });
                return tempData.length;
            }
        }
    },
    created() {
        // console.log(this.ratingscon);
    },
    filters: {
        // 必须有返回值
        filterResult(data) {
            // console.log(this);  //undefined
            // filters设计目的是用于文本转换, 内部的逻辑代码不应该与上下文有关系, 此时应该采用computed
            // 以下代码会抛出错误
            // console.log(this.ratingscon);
            // return this.ratingscon.filter(el => {
            //     if (data == el.rateType) {
            //         return true;
            //     }
            // });
        }
    }
};
</script>

<style scoped lang="stylus">
.select-wrapper
    display flex
    justify-content space-around
    span
        width 20%
        height 0.6rem
        background-color skyblue
        text-align center
        line-height 0.6rem
        font-size 0.3rem
        color #333
        &.on
            background-color deepskyblue
</style>
