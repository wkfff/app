import Vue from 'vue'
import Router from 'vue-router'
import VIndex from "@/pages/index/v-index"
import VNearby from "@/pages/nearby/v-nearby"
import VFind from "@/pages/find/v-find"
import NearbyCon from "@/pages/nearby/components/nearby-con"
import VSnack from "@/pages/snack/v-snack"
import VSeller from "@/pages/seller/v-seller"
import RGoods from "@/pages/seller/components/r-goods"
import RInfo from "@/pages/seller/components/r-info"
import RRatings from "@/pages/seller/components/r-ratings"

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
        },
        {
            name: "VSnack",
            path: "/snack",
            component: VSnack
        },
        {
            name: "VSeller",
            path: "/seller/:id",
            component: VSeller,
            children: [{
                    name: "RGoods",
                    path: "/seller/r-goods",
                    component: RGoods
                },
                {
                    name: "RRatings",
                    path: "/seller/r-ratings",
                    component: RRatings
                },
                {
                    name: "RInfo",
                    path: "/seller/r-info",
                    component: RInfo
                }
            ]
        }
    ]
})
