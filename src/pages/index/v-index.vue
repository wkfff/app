<template>
   <div class="main">
       <div class="header base">首页</div>
        <v-nav></v-nav>
   </div>
</template>

<script type="text/ecmascript-6">
import VNav from "@/pages/common/v-nav"
import "@/assets/css/main.styl"
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      VNav,
  }
}
</script>

<style scoped lang="stylus">
    .header
        background-color cyan

</style>

