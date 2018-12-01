import Vue from 'vue'
import Router from 'vue-router'
import VIndex from '@/pages/index/v-index'
import Find from '@/pages/find/find'
import NearBy from '@/pages/nearBy/nearBy'
import TabCont from '@/pages/nearBy/components/tab-cont'
import Outfood from '@/pages/outfood/outfood'
import Seller from '@/pages/seller/seller'
import Goods from '@/pages/seller/components/r-goods'
import Ratings from '@/pages/seller/components/r-ratings'
import SellerDesc from '@/pages/seller/components/r-seller-desc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'VIndex',
      path: '/',
      component: VIndex
    },
    {
      name: 'Find',
      path: '/find',
      component: Find
    },
    {
      name: 'Outfood',
      path: '/outfood',
      component: Outfood
    },
    {
      name: 'Seller',
      path: '/seller/:id',
      component: Seller,
      children: [
        {
          name: 'Goods',
          path: '/seller/goods',
          component: Goods
        },
        {
          name: 'Ratings',
          path: '/seller/ratings',
          component: Ratings
        },
        {
          name: 'SellerDesc',
          path: '/seller/sellerdesc',
          component: SellerDesc
        }
        
      ]
    },
    {
      name: 'NearBy',
      path: '/nearBy',
      component: NearBy,
      children: [
        {
          name: 'TabCont',
          path:'/nearBy/tabCont/:type',
          component:TabCont
        }
      ]
    }
  ]
})
