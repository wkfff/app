<template>
   <div class="ratings-wrapper" ref="ratingsWrapper">
        <div class="cont">
            <div class="seller-info">
                <p>综合评分：{{curSeller.score}}</p>
                <p>服务态度：<star :size="36" :score="curSeller.serviceScore"></star>{{curSeller.serviceScore}}</p>
                <!-- <p>商品评分：<star :size="36" :score="curSeller.foodScore"></star>{{curSeller.foodScore}}</p> -->
            </div>
            <split></split>
            <div class="user-ratings">
                <!-- 用户评价过滤组件 select -->
                <ratings-select></ratings-select>
                <!-- 符合过滤条件的用户评价 -->
                <div class="ratings">
                    <ul v-if="ratings.length">
                        <li v-for="(item,index) in ratings" :key="index">
                            <p>用户名：{{item.username}}</p>
                            <p>发布时间：{{item.rateTime}}</p>
                            <p>评论内容：{{item.text}}</p>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
       
   </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import axios from 'axios'
import Star from './star'
import Split from './split'
import RatingsSelect from './ratings-select'
export default {
   name: '',
   data() {
       return {
           curSeller: {},
           ratings:[]
       }
   },
  components: {
      Star,
      Split,
      RatingsSelect
  },
  created(){
    //   接收从父组件传来的商家评分信息
      this.curSeller = this.$route.query.seller
    //获取所有用户评论信息
    axios.get("/api/ratings").then(res => {
      let localData = res.data;
      if (localData.errno == 0) {
        this.ratings = localData.data;
        //   当数据更新后，模板再次渲染完毕后才会执行$nextTick里面的回调
        //   延迟执行
        this.$nextTick(() => {
          this._initScroll();
        });
      }
    });
  },
  methods:{
      //   进行滚动初始化
    _initScroll() {
        this.ratingsScroll = new BScroll(this.$refs.ratingsWrapper,{
            click: true
        });
    }
  }

}
</script>

<style scoped lang="stylus">
.ratings-wrapper
    position: absolute;
    left: 0;
    top: 2.3rem;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .user-ratings
        .ratings
            ul
                li
                    border 1px solid #000

</style>
