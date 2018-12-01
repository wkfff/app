<template>
   <div class="nav">
      <ul>
        <router-link to="/" tag="li">首页</router-link>
        <router-link to="/nearBy" tag="li">附近</router-link>
        <router-link to="/find" tag="li">发现</router-link>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
.nav
    position fixed
    left 0
    bottom 0
    width 100%
    height 80px
    border 1px solid #000

</style>
