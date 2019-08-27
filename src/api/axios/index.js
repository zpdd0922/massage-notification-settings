import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { toast } from '@/utils/tips'
import { ERR_OK, HOST } from '../config'

// 定义请求不需Loading模态框的url
const notNeedLoading = []

// 定义始终允许通过的后台请求
const notNeedAlert = []

const Axios = axios.create({
  baseURL: HOST, // 前缀
  responseType: 'json', // 数据格式
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=UTF-8' // json格式数据
  }
})

// http请求拦截器<pendding>
Axios.interceptors.request.use(
  config => {
    const reqUrl = config.url
    const isLoading = notNeedLoading.some(val => reqUrl.indexOf(val) > -1)
    if (!isLoading) {
      // Loading模态框开始
      store.commit('updateLoadingStatus', { isLoading: true })
    }
    // 防止get请求获取数据304缓存，必须保证状态为200
    if (config.method === 'get') {
      if (config.params) {
        config.params['_'] = +new Date()
      } else {
        config.params = { '_': +new Date() }
      }
    }
    return config
  },
  error => {
    toast({ type: 'error', txt: error.data.message })
    return Promise.reject(error)
  }
)

// http响应拦截器<done>
Axios.interceptors.response.use(
  response => {
    // Loading模态框结束
    store.commit('updateLoadingStatus', { isLoading: false })

    const reqUrl = response.config.url || ''
    const data = response.data

    // 接口请求数据格式固定
    const { code, message = '网络繁忙，请稍后再试', result = {} } = data

    // 处理请求完成code
    if (code !== ERR_OK) {
      // -9999 未登录或者session已失效
      if (code === -9999) {
        toast({
          type: 'error',
          txt: '登录信息已失效，请先登录',
          callback: () => {
            // 前端登出 --> 清除缓存数据
            store.dispatch('fedLogout').then(() => {
              location.reload()
            })
          }
        })
      } else {
        // 处理当前接口地址是否不提示
        const isAllow = notNeedAlert.some(val => reqUrl.indexOf(val) > -1)
        if (!isAllow) {
          toast({
            type: 'error',
            txt: message,
            callback: () => {
              // 8888 已提交开户资料 --> 跳至开户状态页
              if (code === 8888) {
                router.push({ name: 'guide' })
              }
            }
          })
        }
      }
      return Promise.reject(data)
    } else {
      // 成功请求，统一处理返回字段result
      return result
    }
  },
  error => {
    // Loading模态框结束
    store.commit('updateLoadingStatus', { isLoading: false })
    let message = error.message
    // 超时错误
    if (error.code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
      message = '网络请求超时，请稍后重试'
    }
    toast({ type: 'error', txt: message })
    return Promise.reject(error)
  }
)

export default Axios
