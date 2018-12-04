<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul v-if="goods.length">
        <li v-for="(item,index) in goods" 
            :key="index" 
            :class="currentIndex==index?'active':''"
            @click="_scrollTo(index)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="foodlist-wrapper" ref="foodlistWrapper">
      <ul v-if="goods.length">
        <li v-for="(item,index) in goods" :key="index" ref="foodClass">
          <h3>{{item.name}}</h3>
          <ul>
            <li v-for="(food,index) in item.foods" :key="index">
              <p>菜名:{{food.name}}</p>
              <p>价格:{{food.price}}</p>
              <carcontrol :food="food" :selectedAll="selectedAll"></carcontrol>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- 使用购物车组件 -->
    <shop-car :selectedAll="selectedAll"></shop-car>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import BScroll from "better-scroll";
import ShopCar from './shop-car'
import Carcontrol from './carcontrol'
export default {
  name: "",
  data() {
    return {
      goods:[],
      scrollY: 0,
      listHeight: [0],
      selectedAll:[]
    };
  },
  components: {
      ShopCar,
      Carcontrol
  },
  created() {
    axios.get("/api/goods").then(res => {
      let localData = res.data;
      if (localData.errno == 0) {
        this.goods = localData.data;
        this.goods.forEach((el)=>{
            this.$set(el,"count",0)
        })
        //   当数据更新后，模板再次渲染完毕后才会执行$nextTick里面的回调
        //   延迟执行
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      }
    });
  },
  methods: {
    //   进行滚动初始化
    _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper,{
            probeType:3,
            click: true
        });
        this.foodlistScroll = new BScroll(this.$refs.foodlistWrapper,{
            click: true,
            probeType: 3
        });
        this.foodlistScroll.on("scroll",(pos)=>{
            this.scrollY = Math.abs(Math.round(pos.y))
        })
    },
    // // 计算每个分类的高度
    _calculateHeight(){
        // 0: li->100   1:li-> 150  2:li->80  最终数组中存储 [0,100,250,330]
        this.$refs.foodClass.forEach((item,index)=>{
            //item是每个li
            //index是索引
            let height = item.clientHeight + this.listHeight[index]
            this.listHeight.push(height);
        })
    },
    _scrollTo(index){
        this.foodlistScroll.scrollToElement(this.$refs.foodClass[index],300);
    }
  },
  computed: {
      currentIndex(){
        let cur = 0;
        let flag = true;
        //   [0,100,250,330]   scrollY= 360
        let len = this.listHeight.length;   // 4 (索引最大为3)
          this.listHeight.forEach((item,index)=>{
              if (index < len-1){
                  let next = this.listHeight[index+1]
                  if (this.scrollY >= item && this.scrollY < next){
                    cur = index
                    flag = false;
                  }
              }
          })
        if (flag){
            cur = len - 1;
        }
        return cur;
      }
  }
};
</script>

<style scoped lang="stylus">
.goods {
  position: absolute;
  left: 0;
  top: 2.3rem;
  bottom: 1rem;
  width: 100%;
  overflow: hidden;
  display: flex;
}

.menu-wrapper {
  flex: 0 0 80px;
  border: 1px solid #000;

  ul {
    li {
      border: 1px solid #000;
      height: 1.5rem;
    &.active {
        background-color #f00
    }
    }
  }
}

.foodlist-wrapper {
  flex: 1;

  ul {
    li {
      h3 {
        height: 0.8rem;
        background-color: #aaaaaa;
      }

      ul {
        li {
          position relative
          border: 1px solid #000;
          height: 2rem;
        }
      }
    }
  }
}
</style>
