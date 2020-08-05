import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/menu1',
      name: '菜单1',
      component: home,
      iconCls: 'el-icon-message' ,// 图标样式class
      children: [
        {
          path: 'sub1',
          name: '子菜单1',
          component: 'sub1',
        },
        {
          path: 'sub2',
          name: '子菜单2',
          compoment: 'sub2'
        }
      ]
    },
    {
      path: '/menu2',
      name: '菜单2',
      component: home,
      iconCls: 'el-icon-message',
      children: [
        {
          path: 'sub1',
          name: '子菜单1',
          component: 'sub1'
        },
        {
          path: 'sub2',
          name: '子菜单2',
          component: 'sub2'
        }
      ]
    }
  ]
})
