// es6 --> es5
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMeta from 'vue-meta'
import VueLazyLoad from 'vue-lazyload'

import fastclick from 'fastclick'
import lodash from 'lodash-es'

// 样式配置
import './assets/stylus/index.styl'
import './assets/js/rem'

// 公用组件注册
import './components/register'

// 引入路由控制
import './router/permission'

// 引入 Style 加载基础样式
import {
  // eslint-disable-next-line
  Style,
  Switch,
  Slide,
  Loading,
  Button,
  Dialog,
  Toast,
  DatePicker,
  IndexList
} from 'cube-ui'

Vue.use(Slide)
Vue.use(Switch)
Vue.use(Loading)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(DatePicker)
Vue.use(IndexList)

// 单独设置页面的title和meta信息
Vue.use(VueMeta)

// 图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/images/default.png')
})

fastclick.attach(document.body)

Vue.prototype.$_ = lodash

Vue.config.productionTip = false

// 非生产环境开启 vConsole
// 生产执行npm run uat
if (process.env.VUE_APP_CONSOLE === 'show') {
  const VConsole = require('vconsole')
  const vConsole = new VConsole()
  console.log(vConsole.version)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
