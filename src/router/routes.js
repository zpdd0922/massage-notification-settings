// 登陆注册用户模块
import userRouter from './modules/user'

// 路由懒加载
const _import = file => () => import('@/views/' + file + '/index.vue')

// 路由配置表
/**
 * 路由参数meta详解
 * title          页面标题
 * whiteAuth      是否白名单（即不需登录）
 *
 */
const routes = [
  // 首页
  {
    path: '/',
    name: 'home',
    component: _import('home'),
    meta: { title: '首页', whiteAuth: process.env.NODE_ENV === 'production' }
  },
  // 用户登录注册模块
  ...userRouter,
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
