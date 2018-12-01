<template>
   <div class="">
       {{type}}
   </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
   name: '',
   data() {
       return {
           type: ''
       }
   },
  components: {},
  watch:{
      '$route': {
            handler: function(){
                // 根据需要可以加入axios拦截器来处理loading
                // axios.get('getData.php',{
                //     params: {
                //         type: this.$route.params.type
                //     }
                // }).then((res)=>{
                //     this.list = res.data;
                // });
                this.type = this.$route.params.type
            },
            immediate: true
          }

  }
}
</script>

<style scoped lang="stylus">
</style>
