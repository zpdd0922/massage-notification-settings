import UserApi from '../api/modules/api-user'

// 使用繁体地区列表
const LOCALE_HK_LIST = ['香港', '台湾', '澳门']
// 域名hk.9fstock.com
const LOCALE_HK_HOST = 'hk'

export default function getIPaddress() {
  return new Promise((resolve, reject) => {
    // 判断域名是否hk.9fstock.com
    const hostname = (window.location.hostname || '').toLocaleLowerCase()
    const isHK = hostname.indexOf(LOCALE_HK_HOST) !== -1
    if (isHK) {
      return resolve({ isHK, result: hostname })
    } else {
      // 如不是，getIP接口判断
      UserApi.getIpAddr().then(result => {
        // 接口请求正常
        const isHK = LOCALE_HK_LIST.some(val => result.indexOf(val) !== -1)
        resolve({ isHK, result })
      }).catch(error => {
        // 接口异常抛出
        console.log('Req-getIpAddr-error：', error.message)
        // 扶正错误接口，默认数据
        resolve({ isHK: false, result: '' })
      })
    }
  })
}