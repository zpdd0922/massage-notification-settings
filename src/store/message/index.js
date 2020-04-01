import messageApi from '@/api/modules/api-message'
import paramsData from '@/api/params/params-wrap'

// 初始化数据 --> mapStates
const state = {}

// 衍生数据，追踪数据更新后值 --> mapGetters
const getters = {}

// mutations，同步数据，vue视图文件中可用this.$store.commit
const mutations = {}

const actions = {
  findUserInformRegs({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      messageApi.findUserInformRegs(paramsData.COMMON(params))
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log(err)
        })
    })
  },
  openOrCloseForInfrom({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      messageApi.openOrCloseForInfrom(paramsData.COMMON(params))
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log(err)
        })
    })
  },
  findWxLogin({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      messageApi.findWxLogin(paramsData.NO_SESSION(params))
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}