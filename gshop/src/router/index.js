import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from "../pages/MSite/MSite.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"
// 
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Msite
        },
        {
            path:'/msite',
            component:Msite
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/profile',
            component:Profile
        }
    ]
})