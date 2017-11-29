import Vue from 'vue'
import Router from 'vue-router'

import Income from '../views/income'
import Admin from '../views/admin'
import Edits from '../views/edit/edits'   //编辑页面

import talentJob from '../views/talents/talentJob'
import talentEdit from '../views/talents/talentEdit'
import talentChange from '../views/talents/talentChange'

import NodFind from '../views/notFind'   // 404 路由

Vue.use(Router)

//之前是 export default
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',   //根路由
      name: 'income',
      component: Income,
      alias:'首页', 

    },
    {
      path: '/talents',   //根路由
      name: 'talents',
      component: Income,
      alias:'昨天',
        children:[{path:'talentJob',name:'talentJob',alias:'员工管理',component:talentJob,hidden:true},
        {path:'talentEdit',name:'talentEdit',alias:'人才编辑',component:talentEdit,hidden:true},
        {path:'talentChange',name:'talentChange',alias:'人才修改',component:talentChange,hidden:true}
        ]

    },
    {
      path: '/talents',
      name: 'talents',
      component: Income,   //因为我的所有导航菜单是在income页面下的
      alias:"今天",
      children:[
        {path:'talentJob',name:'talentJob',alias:'员工管理',component:talentJob,hidden:true},
        {path:'talentEdit',name:'talentEdit',alias:'人才编辑',component:talentEdit,hidden:true},
        {path:'talentChange',name:'talentChange',alias:'人才修改',component:talentChange,hidden:true}
      ]
    },
    {
      path: '/talents', 
      name: 'talents',
      component: Edits,
      alias:"明天",
      children:[
        {path:'talentJob',name:'talentJob',alias:'员工管理',component:talentJob,hidden:true},
        {path:'talentEdit',name:'talentEdit',alias:'人才编辑',component:talentEdit,hidden:true},
        {path:'talentChange',name:'talentChange',alias:'人才修改',component:talentChange,hidden:true}
      ]
    },
    {
      path: '/talents',     // 404页面 路由
      name: 'talents',
      component: NodFind,
      alias:"后天",
      children:[
        {path:'talentJob',name:'talentJob',alias:'员工管理',component:talentJob,hidden:true},
        {path:'talentEdit',name:'talentEdit',alias:'人才编辑',component:talentEdit,hidden:true},
        {path:'talentChange',name:'talentChange',alias:'人才修改',component:talentChange,hidden:true}
      ]
    }

  ]
})

export default router;  //出口


