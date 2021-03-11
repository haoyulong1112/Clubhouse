// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import store from '@/store' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import cloneDeep from 'lodash/cloneDeep'
import VueCookie from 'vue-cookie'
// import '@/utils/rem'
// import 'font-awesome/css/font-awesome.min.css'
Vue.use(ElementUI)
Vue.use(Router)

Vue.use(VueCookie)
Vue.config.productionTip = false
// 保存整站vuex本地储存初始状态
console.log(cloneDeep(store.state));
window.SITE_CONFIG['storeState'] = cloneDeep(store.state)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
