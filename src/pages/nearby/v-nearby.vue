<template>
    <div class="">
        <nearby-top></nearby-top>
        <nearby-carrousel class="banner"></nearby-carrousel>
		<div class="turn">
			<router-link to="/nearby/food">享美食</router-link>
			<router-link to="/nearby/life">惠生活</router-link>
			<router-link to="/nearby/play">爱玩乐</router-link>
			<router-link to="/nearby/live">住酒店</router-link>
			<router-link to="/nearby/all">全部</router-link>
		</div>
		<transition name="move" mode="out-in" appear>
			<router-view :key="key"></router-view>
		</transition>
        <v-nav></v-nav>
    </div>
</template>

<script type="text/ecmascript-6">
  	// 底部导航
    import VNav from "@/pages/common/v-nav"
    // 顶部搜索
    import NearbyTop from "@/pages/nearby/components/nearby-top"
    // banner
	import NearbyCarrousel from "@/pages/nearby/components/nearby-carrousel"
	// 内容
	import NearbyCon from "@/pages/nearby/components/nearby-con"
    export default {
        name: '',
        data() {
			return {
				
			}
		},
		computed: {
			key(){
				return this.$route.path.replace(/\//g, "_");
			}
		},
        components: {
			VNav,
			NearbyTop,
			NearbyCarrousel,
			NearbyCon
		},
		methods: {
		}
    }

</script>

<style scoped lang="stylus">
.banner
	width 100%
	height 2.6rem
.turn
	width 100%
	height 0.8rem
	display flex
	justify-content space-around
	a
		line-height 0.8rem
		color #000
.move-enter-active,
.move-leave-active
	transition all 5s
.move-enter
	transform translate(-100%, 0)
	opacity 0
.move-leave-to
	opacity 0
	transform translate(100%, 0)

</style>
