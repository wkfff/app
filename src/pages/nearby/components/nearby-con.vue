<template>
  <div class="con-wrapper">
    <ul>
      <li v-for="(item, index) in itemLists" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      itemLists: []
    };
  },
  components: {},
  watch: {
    $route: {
      handler: function() {
        axios
          .get("http://localhost/del.php", {
            params: {
              mark: this.$route.params.type
            }
          })
          .then(res => {
            this.itemLists = res.data;
          });
      },
      immediate: true
    }
  }
};
</script>

<style scoped lang="stylus">
.con-wrapper
  li
    font-size 0.4rem
    color deeppink
    text-align center
    height 0.6rem
    line-height 0.6rem
</style>