import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import AdminIndex from '../components/AdminIndex'
import ProductManage from '../pages/product/ProductManage'
import ClientManage from '../pages/client/ClientManage'
import importPhoneMange from '../pages/importphone/importPhone'
import userManage from '../pages/user/userManage'
import clubmange from '../pages/clubmange/clubmange'
import clubexamineList from '../pages/clubmange/clubexamine/clubexaminelist'
import userDetail from '../pages/user/userdetail/userDetail'
import masterSet from '../pages/master/masterset/masterset'
import mastermsgSet from '../pages/master/mastermsgset/mastermsgset'
import systemconfig from '../pages/system/systemconfig'

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
              meta: {title: '俱乐部列表',icon: 'el-icon-s-grid'}
          },
          {
              path: 'clubexamine',
              name: 'clubexaminelist',
              component: clubexamineList,
              meta: {title: '俱乐部审核列表',icon: 'el-icon-s-grid'}
          },
          {
              path: 'system',
              name: 'systemconfig',
              component: systemconfig,
              meta: {title: '系统配置',icon: 'el-icon-s-tools'}
          },
          {
            path: 'userdetail',
            name: 'userDetail',
            component: userDetail,
            meta: {title: '用户详情',icon: 'el-icon-user'}
          },
          {
            path: 'masterset',
            name: 'masterset',
            component: masterSet,
            meta: {title: '管理员设置',icon: 'el-icon-s-custom'}
          },
          {
            path: 'mastermsgset',
            name: 'mastermsgset',
            component: mastermsgSet,
            meta: {title: '管理员信息设置',icon: 'el-icon-s-custom'}
          },
        ]
    }
  ]
})
