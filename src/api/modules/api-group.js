import axios from '../axios'
import paramsData from '../params/params-wrap'

export default {
  // 获取邀请人信息
  /**
   * @params sessionId
   */
  fetchInvUserIdInfo: params => axios.post('/sn_group_head_api/inviter_info', paramsData.COMMON(params)),

  // 奖励信息
  /**
   * @params sessionId
   */
  fetchRewardInfo: params => axios.post('/activity_api/reward_record', paramsData.COMMON(params)),

  // 邀请奖励滚动信息
  /**
   * @params sessionId
   */
  fetchInviteRewardRoll: params => axios.post('/activity_api/invite_reward_roll', paramsData.COMMON(params)),

  // 助力牛人榜
  /**
   * @params sessionId
   */
  fetchInviteRank: params => axios.post('/activity_api/invite_rank', paramsData.COMMON(params)),

  // 奖励牛人榜
  /**
   * @params sessionId
   */
  fetchRewardRank: params => axios.post('/activity_api/reward_rank', paramsData.COMMON(params)),

  // 奖励明细
  /**
   * @params sessionId
   */
  fetchRewardMoneyDetail: params => axios.post('/activity_api/reward_money_detail', paramsData.COMMON(params)),

  // 提现明细
  /**
   * @params sessionId
   */
  fetchWithdrawInfo: params => axios.post('/activity_api/withdraw_info', paramsData.COMMON(params)),

  // 提现申请
  /**
   * @params sessionId
   */
  fetchWithdrawApply: params => axios.post('/activity_api/withdraw_apply', paramsData.COMMON(params)),

  // 获取可提现金额
  /**
   * @params sessionId
   */
  fetchWithdrawMoney: params => axios.post('/activity_api/withdraw_money', paramsData.COMMON(params)),

  // 校验手机号码是否已短信邀请
  /**
   * @params sessionId
   */
  fetchPhoneIsInvite: params => axios.post('/activity_api/phone_is_invite', paramsData.COMMON(params)),

  // 短信提醒用户
  /**
   * @params sessionId
   */
  fetchRemindAccount: params => axios.post('/activity_api/remind_account', paramsData.COMMON(params)),

  // 短信邀请
  /**
   * @params sessionId
   */
  fetchPhoneInvite: params => axios.post('/activity_api/phone_invite', paramsData.COMMON(params)),

  // 获取当天邀请次数
  /**
   * @params sessionId
   */
  fetchInviteCnt: params => axios.post('/activity_api/invite_cnt', paramsData.COMMON(params)),

  // 过滤未注册手机号码
  /**
   * @params sessionId
   * @params phoneNumberList  类型：Array  备注：通讯录列表
   */
  fetchRegPhone: params => axios.post('/activity_api/validate_reg_phone', paramsData.COMMON(params)),

  // 邀请记录
  /**
   * @params sessionId
   */
  fetchInviteInfo: params => axios.post('/activity_api/invite_info', paramsData.COMMON(params)),

  // 首页邀请人数
  /**
   * @params sessionId
   */
  fetchInviteUserInfo: params => axios.post('/activity_api/invite_user_info', paramsData.COMMON(params)),

  // 获取入金奖励配置
  /**
   * @params sessionId
   */
  fetchDepositRewardSetting: params => axios.post('/activity_api/deposit_reward_setting', paramsData.COMMON(params)),

  // 获取开户奖励配置
  /**
   * @params sessionId
   */
  fetchOpenRewardSetting: params => axios.post('/activity_api/open_reward_setting', paramsData.COMMON(params)),

  // 获取转仓奖励配置
  /**
   * @params sessionId
   */
  fetchTransferRewardSetting: params => axios.post('/activity_api/transfer_reward_setting', paramsData.COMMON(params)),

  // 记录分享信息
  /**
   * @params sessionId
   */
  getShareRecord: params => axios.post('/activ_api/share_record', paramsData.COMMON(params)),

  /**
   * 获取开户状态
   * @method POST/JSON open_api/processstep
   * @param openType      int 开户类型
   ** openType
   * 1: 只查询线上开户情况
   * 2: 线上线下开户状态均查询
   * @return JSON { code: integer, message: string, result }
   * 0 开户成功
   * 1 开户中(线上已提交资料 || 线上已经预约)
   * 2 开户失败（线下相关）
   * 3 基本资料错误（线上相关）
   * 4 图片资料错误（线上相关）
   * 5 基本资料以及图片资料错误（线上相关）
   * 6 未提交资料 （单独处理）
   * 7 开户被拒绝
   * 8 用户取消开户
   */
  getOpenStatus: data =>
    axios.post('open_api/processstep', paramsData.WRAP(data)),

  // 查询用户状态
  /**
   * @returns result<Object>
   * depositStatus:      入金状态， 1 已入金； 0 未入金
   * openAccountStatus:    开户状态，1 已开户； 0 未开户
   * tradeAccount:     交易账号
   * tradeStatus:      交易状态 1 已交易； 0 未交易
   * transferStatus:    转仓状态，1 已转仓； 0 未转仓
   * userRegStatus:     开户状态，1 已注册； 0 未注册
   * withdrawalStatus:   出金状态， 1 已出金； 0 未出金
   * */
  findCrmUserStatus: data =>
    axios.post('/open_api/findCrmUserStatus', paramsData.COMMON(data)),

  /**
   * 获取开户方式 - 进入对应入金地址
   *
   * @return JSON { code: integer, message: string, result: { bankType } }
   * bankType ==> 银行账户类型 [0-香港银行卡 1-大陆银行卡]
   */
  getOpenBankType: data =>
    axios.post('/open_api/get_open_bank_type', paramsData.COMMON(data))
}