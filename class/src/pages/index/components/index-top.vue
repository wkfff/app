<template>
   <div class="top">
       <div class="weather">{{degree}}</div>
       <div class="city">郑州市</div>
       <div class="search">input</div>
   </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
   name: '',
   data() {
       return {
           degree: '0'
       }
   },
  components: {},
  created(){
    //   axios.get('http://localhost/api/getData.php',{
    //       params: {
    //           title: '光学眼镜'
    //       }
    //   }).then((res)=>{
    //       this.degree = res.data[0].tit;
    //   })
  }
}
</script>

<style scoped lang="stylus">
</style>

