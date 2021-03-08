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
              component: ProductManage
          },
          {
              path: 'client',
              name: 'ClientManage',
              component: ClientManage
          },
          {
              path: 'importphone',
              name: 'importPhone',
              component: importPhoneMange
          },
          {
              path: 'user',
              name: 'userManage',
              component: userManage,
          },
          {
              path: 'clubmange',
              name: 'clubmange',
              component: clubmange,
          },
          {
            path: 'userdetail',
            name: 'userDetail',
            component: userDetail
          },
        ]
    }
  ]
})
