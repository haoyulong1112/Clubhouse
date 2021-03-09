import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import AdminIndex from '../components/AdminIndex'
import ProductManage from '../pages/product/ProductManage'
import ClientManage from '../pages/client/ClientManage'
import importPhoneMange from '../pages/importphone/importPhone'
import userManage from '../pages/user/userManage'
import clubmange from '../pages/clubmange/clubmange'
import userDetail from '../pages/user/userdetail/userDetail'

Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location:any) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'AdminIndex',
        component: AdminIndex,
        children: [
          {
              path: 'product',
              name: 'ProductManage',
              component: ProductManage,
              meta: {title: '活动列表'}
          },
          {
              path: 'client',
              name: 'ClientManage',
              component: ClientManage,
              meta: {title: '活动列表'}
          },
          {
              path: 'importphone',
              name: 'importPhone',
              component: importPhoneMange,
              meta: {title: '手机号导入',icon: 'el-icon-mobile-phone'}
          },
          {
              path: 'user',
              name: 'userManage',
              component: userManage,
              meta: {title: '用户管理列表',icon: 'el-icon-user'}
          },
          {
              path: 'clubmange',
              name: 'clubmange',
              component: clubmange,
              meta: {title: '俱乐部管理列表',icon: 'el-icon-s-grid'}
          },
          {
            path: 'userdetail',
            name: 'userDetail',
            component: userDetail,
            meta: {title: '用户详情',icon: 'el-icon-user'}
          },
        ]
    }
  ]
})
