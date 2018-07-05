import Vue from 'vue'
//1、引入vue-router
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import A from '@/pages/list/A'
import B from '@/pages/list/B'

//2、使用这个router插件
Vue.use(Router)

//3、生成一个router实例
export default new Router({
  // mode: "history", // url中没有“ # ”
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //动态路由
    {
      path: '/list/:id',
      name: 'list',
      component: List,
      props: true
    }

    //嵌套路由
    // {
    //   path: '/list',
    //   name: 'list',
    //   component: List,
    //   children: [{
    //     path: 'a',
    //     name: 'a',
    //     component: A
    //   },{
    //     path: 'b',
    //     name: 'b',
    //     component: B
    //   }]
    // }
  ]
})
