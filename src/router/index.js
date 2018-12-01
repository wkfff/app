import Vue from 'vue'
import Router from 'vue-router'
import VIndex from "@/pages/index/v-index"
import VNearby from "@/pages/nearby/v-nearby"
import VFind from "@/pages/find/v-find"
import NearbyCon from "@/pages/nearby/components/nearby-con"

// 模块化方案中用到的vue插件都需要先通过Vue.use()方法注册
Vue.use(Router)

export default new Router({
  routes: [{
      name: "Index",
      path: "/index",
      component: VIndex
    },
    {
      path: "/",
      redirect: "/index"
    },
    {
      name: "VNearby",
      path: "/nearby",
      component: VNearby,
      children: [{
          name: "",
          path: "/nearby/:type",
          component: NearbyCon
        },
        {
          name: "",
          path: "/nearby",
          redirect: "/nearby/food"
        }
      ]
    },
    {
      name: "VFind",
      path: "/find",
      component: VFind
    }
  ]
})
