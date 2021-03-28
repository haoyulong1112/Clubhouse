import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import AdminIndex from '../components/AdminIndex'
import importPhoneMange from '../pages/importphone/importPhone'
import userManage from '../pages/user/userManage'
import clubmange from '../pages/clubmange/clubmange'
import clubexamineList from '../pages/clubmange/clubexamine/clubexaminelist'
import clubexamineApply from '../pages/clubmange/clubapply/clubexamineapply'
import clubDetail from '../pages/clubmange/clubdetail/clubdetail'
import userDetail from '../pages/user/userdetail/userDetail'
import masterSet from '../pages/master/masterset/masterset'
import mastermsgSet from '../pages/master/mastermsgset/mastermsgset'
import systemconfig from '../pages/system/systemconfig'

Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location:any) {
//   return originalPush.call(this, location).catch(err => err)
// }

const router = new Router({
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
        meta: {
            requireAuth: true
        },
        children: [
          {
              path: 'importphone',
              name: 'importPhone',
              component: importPhoneMange,
              meta: {title: '手机号导入',icon: 'el-icon-mobile-phone',requireAuth: true}
          },
          {
              path: 'user',
              name: 'userManage',
              component: userManage,
              meta: {title: '用户管理列表',icon: 'el-icon-user',requireAuth: true}
          },
          {
              path: 'clubmange',
              name: 'clubmange',
              component: clubmange,
              meta: {title: '俱乐部列表',icon: 'el-icon-s-grid',requireAuth: true}
          },
          {
              path: 'clubexamine',
              name: 'clubexaminelist',
              component: clubexamineList,
              meta: {title: '俱乐部审核列表',icon: 'el-icon-s-grid',requireAuth: true}
          },
          {
              path: 'clubapply',
              name: 'clubexamineapply',
              component: clubexamineApply,
              meta: {title: '俱乐部申请',icon: 'el-icon-s-grid',requireAuth: true}
          },
          {
              path: 'system',
              name: 'systemconfig',
              component: systemconfig,
              meta: {title: '系统配置',icon: 'el-icon-s-tools',requireAuth: true}
          },
          {
            path: 'userdetail',
            name: 'userDetail',
            component: userDetail,
            meta: {title: '用户详情',icon: 'el-icon-user',requireAuth: true}
          },
          {
            path: 'masterset',
            name: 'masterset',
            component: masterSet,
            meta: {title: '管理员设置',icon: 'el-icon-s-custom',requireAuth: true}
          },
          {
            path: 'mastermsgset',
            name: 'mastermsgset',
            component: mastermsgSet,
            meta: {title: '管理员信息设置',icon: 'el-icon-s-custom',requireAuth: true}
          },
          {
            path: 'clubdetail',
            name: 'clubdetail',
            component: clubDetail,
            meta: {title: '俱乐部详情',icon: 'el-icon-s-grid',requireAuth: true}
          }
        ]
    }
  ]
});

export default router
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        console.log(sessionStorage.getItem("token"));
      if (sessionStorage.getItem("token")) { // 判断本地是否存在token
        next()
      } else {
        // 未登录,跳转到登陆页面
        next('/')
      }
    } else {
        console.log(sessionStorage.getItem("token"));
        next();
    }
  });
