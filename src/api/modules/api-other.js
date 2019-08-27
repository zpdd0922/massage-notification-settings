import axios from '../axios'
import paramsData from '../params/params-wrap'

export default {

  /**
   * 获取开户方式 - 进入对应入金地址
   *
   * @return JSON { code: integer, message: string, result: { bankType } }
   * bankType ==> 银行账户类型 [0-香港银行卡 1-大陆银行卡]
   */
  getOpenBankType: params => axios.post('/open_api/get_open_bank_type', paramsData.COMMON(params)),

  // 查询用户状态
  /**
   * @returns result<Object>
   *  0 失败， 1成功
   * depositStatus: 0
   * openAccountStatus: 0
   * tradeAccount: null
   * tradeStatus: 0
   * transferStatus: null
   * userRegStatus: null
   * withdrawalStatus: null
   * */
  findCrmUserStatus: params => axios.post('/open_api/findCrmUserStatus', paramsData.COMMON(params)),

  /**
   * 分享
   * @param url 分享域名
   *
   */
  shareWechat: params => axios.get('/weixin_api/ai_share', { params })

}