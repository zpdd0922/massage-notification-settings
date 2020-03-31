import apiAsync from '../axios'
import { InterFaceUrl } from '../config'

export default {
  // 查询用户消息通知设置
  findUserInformRegs: data => apiAsync({
    method: 'post',
    url: InterFaceUrl('/user_api/findUserInformRegs'),
    data: data,
    loading: true,
    catchs: true,
    toast: true
  }),
  // 开启OR关闭消息通知设置 
  openOrCloseForInfrom: data => apiAsync({
    method: 'post',
    url: InterFaceUrl('/user_api/openOrCloseForInfrom'),
    data: data,
    loading: true,
    catchs: true,
    toast: true
  })
}