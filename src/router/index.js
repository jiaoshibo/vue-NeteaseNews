import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Nearby from '@/pages/Nearby'
import Goshopping from '@/pages/Goshopping'
import Order from '@/pages/Order'
import Mine from '@/pages/Mine'
import Zhuyao from '@/pages/Main'
import Zero from '@/pages/home/Zero'
import Setting from '@/pages/mine/Setting'
import Msg from '@/pages/mine/Msg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home',
      component:Zhuyao,
      children:[
        {
          path: '/home',
          name:'home',
          component:Home,
        },
        {
          path:'/goshopping',
          name:'goshopping',
          component:Goshopping
        },
        {
          path:'/nearby',
          name:'nearby',
          component:Nearby
        },
        {
          path:'/order',
          name:'order',
          component:Order
        },
        {
          path:'/mine',
          name:'mine',
          component:Mine
        }
      ]
    },
    {
      path:'/zero',
      name:'zero',
      component:Zero
    },
    {
      path:'/setting',
      name:'setting',
      component:Setting
    },
    {
      path:'/msg',
      name:'msg',
      component:Msg
    }
  ]
})
