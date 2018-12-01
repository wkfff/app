<template>
  <div class>
    <div class="top">附近的顶部</div>
    <div class="carousel">附近的轮播图</div>
    <div class="nav">
      <!-- /url?type=food -->
      <router-link to="/nearBy/tabCont/food">美食</router-link>
      <router-link to="/nearBy/tabCont/life">生活</router-link>
      <router-link to="/nearBy/tabCont/play">玩乐</router-link>
    </div>
    <transition name="fade"  mode="out-in">
      <router-view :key="key"></router-view>
    </transition>

    <v-nav></v-nav>
  </div>
</template>

<script type="text/ecmascript-6">
import VNav from "@/pages/common/v-nav";
export default {
  name: "",
  data() {
    return {
      isShow: true
    };
  },
  components: {
    VNav
  },
  computed: {
    key() {
      return this.$route.path.replace(/\//g, "_");
    }
  }
};
</script>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: all 2s;
}

.fade-enter {
  transform: translate(-100%, 0);
}

.fade-leave-to {
  transform: translate(100%, 0);
}
</style>
