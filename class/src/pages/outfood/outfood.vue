<template>
   <div class="main">
       <router-link to="/">&lt;</router-link>
       <h1>商家列表</h1>
       <div class="goods-list">
           <ul v-if="list.length">
               <router-link v-for="item in list" :key="item.id" tag="li" :to="'/seller/'+item.id">
                   <p><img :src="'/static/images/' + item.imgUrl" alt="" width="60" height="60"></p>
                    <p>商家名称:{{item.seller}}</p>
                    <p>其它信息：{{item.price}}</p>
               </router-link>
           </ul>
       </div>
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
  created(){
      this.list = [
          {
              id: '001',
              imgUrl: '1.jpg',
              seller: '德克士',
              price: '20'
          },
          {
              id: '002',
              imgUrl: '2.jpg',
              seller: '福状元',
              price: '70'
          },
          {
              id: '003',
              imgUrl: '3.jpg',
              seller: '金拱门',
              price: '10'
          }

      ]
  }
}
</script>

<style scoped lang="stylus">
.main
    .goods-list
        li
            border 1px solid #000
            margin 0.05rem
</style>
