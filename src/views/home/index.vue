<template>
  <div class="home">
    <div class="header">
      <p class="bindPhone">已绑定手机号 <span>{{phoneNum}}</span></p>
      <p class="bindTips">您可在此页面开启或关闭相应的公众号消息通知。</p>
    </div>
    <!-- tab切换栏 -->
    <div class="home-tab">
      <ul class="flex border-bottom-1px">
        <li v-for="(item, index) in tabs"
            :key="index"
            :class="['flex-item', (tabIndex === index) && 'active']"
            @click="handleTabClick(item, index)">{{item.name}}</li>
      </ul>
    </div>
    <!-- 内容区域 -->
    <div class="home-panel">
      <!-- 证券服务内容区 -->
      <div v-if="tabIndex===0" class="content">
        <!-- 开关组件 -->
        <ul class="switchWrap">
          <li class="switchItem" v-for="(item,index) in securityData" :key="index">
            <p class="label">{{item.label}}</p>
            <cube-switch v-model="item.value" class="switch-btn" @input="handleSwitch(item.value,item.name)">
            </cube-switch>
          </li>
        </ul>
      </div>
      <!-- 新股申购内容区 -->
      <div v-if="tabIndex===1" class="content">
        <ul class="switchWrap">
          <li class="switchItem2" v-for="(item,index) in ipoData" :key="index">
            <p class="label">{{item.label}}</p>
            <cube-switch v-model="item.value" class="switch-btn" @input="handleSwitch(item.value,item.name)">
            </cube-switch>
          </li>
        </ul>
      </div>
      <!-- 其他内容区 -->
      <div v-if="tabIndex===2" class="content">
        <ul class="switchWrap">
          <li class="switchItem" v-for="(item,index) in otherData" :key="index">
            <p class="label">{{item.label}}</p>
            <cube-switch v-model="item.value" class="switch-btn" @input="handleSwitch(item.value,item.name)">
            </cube-switch>
          </li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const DEFAULT_TAB = [{
  id: 1, name: '证券服务', page: 'security'
}, {
  id: 2, name: '新股申购', page: 'ipo'
},{
  id: 3, name: '其他', page: 'other'
}]

export default {
  data() {
    return {
      tabIndex: 0,
      tabName: 'security',
      tabs: DEFAULT_TAB,
      phoneNum: '136****6102', // 绑定的手机号码
      securityData:[
        {
          label:'出入金受理提醒',
          value: true,
          name:'depositHandle'
        },
        {
          label:'出入金成功提醒',
          value: true,
          name:'depositSuccess'
        },
        {
          label:'转仓受理提醒',
          value: true,
          name:'transferHandle'
        },
        {
          label:'转仓成功提醒',
          value: true,
          name:'transferSuccess'
        },
        {
          label:'Level2行情生效提醒',
          value: true,
          name:'quoteValid'
        },
        {
          label:'Level2行情到期提醒',
          value: true,
          name:'quoteOutdate'
        },
        {
          label:'免佣生效提醒',
          value: true,
          name:'freeValid'
        },
        {
          label:'免佣到期提醒',
          value: true,
          name:'freeOutdate'
        },
      ],
      ipoData:[
        {
          label:'新股可申购提醒',
          value: true,
          name:'ipoCanApply'
        },
        {
          label:'新股申购成功提醒',
          value: true,
          name:'ipoApplySuccess'
        },
        {
          label:'新股中签提醒',
          value: true,
          name:'ipoGetStock'
        },
      ],
      otherData: [
        {
          label:'股价提醒',
          value: true,
          name:'stockPrice'
        },
        {
          label:'打新牛人提醒',
          value: true,
          name:'ipoPriceMan'
        },
      ]
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    // tab切换
    handleTabClick(item, index) {
      this.tabIndex = index
      this.tabName = item.page
    },
    handleSwitch(value,name) {
      console.log('this value',value)
      console.log('this value',name)
    }
  }
}
</script>

<style scoped lang="stylus">
@import './main'
</style>
