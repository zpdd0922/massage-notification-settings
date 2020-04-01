<template>
  <div class="home">
    <div class="header">
      <p class="bindPhone">已绑定手机号 <span>{{phoneNum}}</span></p>
      <p class="bindTips">您可在此页面开启或关闭相应的公众号消息通知。</p>
    </div>
    <!-- tab切换栏 -->
    <div class="home-tab">
      <ul class="flex border-bottom-1px">
        <li v-for="(item) in tabs"
            :key="item.id"
            :class="['flex-item', (tabIndex === item.id) && 'active']"
            @click="handleTabClick(item)">{{item.name}}</li>
      </ul>
    </div>
    <!-- 内容区域 -->
    <div class="home-panel">
      <!-- 证券服务内容区 -->
      <div class="content" v-if="showList(0)">
        <!-- 开关组件 -->
        <ul class="switchWrap">
          <li class="switchItem" v-for="(item,index) in securityData" :key="index">
            <p class="label">{{item.label}}</p>
            <cube-switch v-model="item.value" class="switch-btn" @input="handleSwitch(item)"></cube-switch>
          </li>
        </ul>
      </div>
      <!-- 新股申购内容区 -->
      <div class="content" v-if="showList(1)">
        <ul class="switchWrap">
          <li class="switchItem2" v-for="(item,index) in ipoData" :key="index">
            <p class="label">{{item.label}}</p>
            <cube-switch v-model="item.value" class="switch-btn" @input="handleSwitch(item)"></cube-switch>
          </li>
        </ul>
      </div>
      <!-- 其他内容区 -->
      <div class="content" v-if="showList(2)">
        <ul class="switchWrap">
          <li class="switchItem" v-for="(item,index) in otherData" :key="index">
            <p class="label">{{item.label}}</p>
            <cube-switch v-model="item.value" class="switch-btn" @input="handleSwitch(item)"></cube-switch>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getURLParameters } from '@/utils/url'
import ua from '@/utils/ua-parser'
import storage from '@/utils/storage'
import { KEY_USER_INFO } from '@/api/config'
import { alert } from '@/utils/tips'

export default {
  data() {
    return {
      tabIndex: 0,
      tabName: 'security',
      tabs: [
        { id: 0, name: '证券服务', page: 'security' }, 
        { id: 1, name: '新股申购', page: 'ipo' },
        { id: 2, name: '其他', page: 'other' }
      ],
      phoneNum: '', // 绑定的手机号码
      // 证券服务
      securityData: [
        {
          key: 101,
          label: '出入金受理提醒',
          value: true,
          name: 'deposHandle'
        },
        {
          key: 102,
          label: '出入金成功提醒',
          value: true,
          name: 'depositSuccess'
        },
        {
          key: 103,
          label: '转仓受理提醒',
          value: true,
          name: 'transferHandle'
        },
        {
          key: 104,
          label: '转仓成功提醒',
          value: true,
          name: 'transferSuccess'
        },
        {
          key: 105,
          label: 'Level2行情生效提醒',
          value: true,
          name: 'quoteValid'
        },
        {
          key: 106,
          label: 'Level2行情到期提醒',
          value: true,
          name: 'quoteOutdate'
        },
        {
          key: 107,
          label: '免佣生效提醒',
          value: true,
          name: 'freeValid'
        },
        {
          key: 108,
          label: '免佣到期提醒',
          value: true,
          name: 'freeOutdate'
        }
      ],
      // 新股申购
      ipoData: [
        {
          key: 109,
          label: '新股可申购提醒',
          value: true,
          name: 'ipoCanApply'
        },
        {
          key: 110,
          label: '新股申购成功提醒',
          value: true,
          name: 'ipoApplySuccess'
        },
        {
          key: 111,
          label: '新股中签提醒',
          value: true,
          name: 'ipoGetStock'
        }
      ],
      // 其他
      otherData: [
        {
          key: 112,
          label: '股价提醒',
          value: true,
          name: 'stockPrice'
        },
        {
          key: 113,
          label: '打新牛人提醒',
          value: true,
          name: 'ipoPriceMan'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    // 显示列表
    showList(idx) {
      return this.tabIndex === idx
    },
    // tab切换
    handleTabClick(item) {
      const { id, page } = item
      this.tabIndex = id
      this.tabName = page
    },
    handleSwitch(data) {
      const { key, value } = data
      const params = {
        busType: 5,
        tempCode: key,
        isClose: value
      }
      this.$store.dispatch('openOrCloseForInfrom', params)
    },
    // 维系自动授权
    async findWxLogin() {
      const isWx = ua.isWX()
      if (isWx) {
        const { openId } = getURLParameters()
        const params = {
          openId
        }
        console.log('openId', openId)
        this.$store.dispatch('findWxLogin', params).then((res) => {
          this.$store.dispatch('wxLogin', res).then(() => {
            this.getList()
          })
        }).catch(err => {
          alert({
            title: '温馨提示',
            content: err.message
          })
        })
      } else {
        this.getList()
      }
    },
    // 获取用户配置信息
    getList() {
      const uInfo = storage.get(KEY_USER_INFO)
      this.phoneNum = uInfo.phoneNum
      const params = {
        busType: 5
      }
      this.$store.dispatch('findUserInformRegs', params).then(res => {
        this.securityData = this.securityData.map(v => {
          const key = res[v.key]
          let value = true
          if (key === false) {
            value = false
          }
          return {
            ...v,
            value
          }
        })
        this.ipoData = this.ipoData.map(v => {
          const key = res[v.key]
          let value = true
          if (key === false) {
            value = false
          }
          return {
            ...v,
            value
          }
        })
        this.otherData = this.otherData.map(v => {
          const key = res[v.key]
          let value = true
          if (key === false) {
            value = false
          }
          return {
            ...v,
            value
          }
        })
      })
    }
  },
  created() {
    this.findWxLogin()
  }
}
</script>

<style scoped lang="stylus">
@import './main'
</style>
