<template>
   <div class="car-wrapper">
       <div class="car-bottom" @click="_showList">
           <p>logo</p>
            <p>数量:{{totalCount}}个</p>
            <p>总价:{{totalPrice}}元</p>
            <p>{{desc}}</p>
       </div>
       <transition name="move">
           <div class="list-wrapper" v-if="isShow">
           <div class="title">
               <p>购物车</p>
               <p>清空</p>
           </div>
           <div class="list" >
               <ul v-if="selectedAll.length">
                   <li v-for="(item,index) in selectedAll" :key="index" v-if="item.count">
                       <span>{{item.name}}</span>--<span>{{item.price* item.count}}--</span>
                       <carcontrol :food="item" :selectedAll="selectedAll"></carcontrol>
                   </li>
               </ul>
           </div>
        </div>
       </transition>
       <div class="mask" v-if="isShow"></div>
   </div>
</template>

<script type="text/ecmascript-6">
import Carcontrol from './carcontrol'
export default {
    props:{
        //从goods父组件传入的被添加到购物车的所有商品
        // 在用户还没有购物时，传入的selectedAll应该是空数组
        selectedAll:{
            type: Array,
            //为了跑通购物车逻辑，先设置模拟数据
            default(){
                return [
                    {
                       name: '皮蛋',
                       price: 10,
                       count: 1
                    },
                    {
                       name: '牛肉',
                       price: 6 ,
                       count: 1

                    },
                    {
                       name: '巧克力',
                       price: 16 ,
                       count: 3
                    }
                ]
            }
        }
    },
    name: '',
    data() {
        return {
            minPrice: 0,
            isShow: false
        }
    },
    components: {
        Carcontrol
    },
    created(){
        Bus.$on('send',(data)=>{
            this.minPrice = data
        })
    },
    computed: {
        totalCount(){
            let count = 0
            if (this.selectedAll.length){
                this.selectedAll.forEach(element => {
                    count += element.count
                });
            }
            return count
        },
        totalPrice(){
            let price = 0
            if (this.selectedAll.length){
                this.selectedAll.forEach(element => {
                    price += element.price * element.count
                });
            }
            return price
        },
        desc(){
            // 如果商品为0,则显示20元起送
            // 如果有商品，则总价<20元时，显示还差多少起送
            // 如果总价>20元，显示去结算
            let minPrice = this.minPrice
            if (this.totalPrice == 0){
                return `${minPrice}元起送`
            }else if(this.totalPrice < minPrice){
                let diff = minPrice - this.totalPrice
                return `还差${diff}元起送`
            }else{
                return '去结算'
            }
        }
    },
    methods: {
        _showList(){
            this.isShow = !this.isShow
        }
    }

}
</script>

<style scoped lang="stylus">
.car-wrapper
    position fixed
    left 0
    bottom 0
    width 100%
    height 1rem
    
    .car-bottom
        width 100%
        height 100%
        display flex
        background-color #999
        p
            border 1px solid #000
            flex 1
    .move-enter-active,
    .move-leave-active
        transition all .5s
    .move-enter,
    .move-leave-to
        transform translate(0,100%)
    
    .list-wrapper   
        position absolute
        left 0
        bottom 1rem
        width 100%
        background-color #0ff
        z-index -1
        .title
            display flex
            justify-content space-around
            height .5rem
        .list li
            position relative
            height 1rem
            border 1px solid #000
    .mask 
        position fixed
        left 0
        top 0
        width 100%
        height 100%
        background-color rgba(0,0,0,.7) 
        z-index -2      
</style>
