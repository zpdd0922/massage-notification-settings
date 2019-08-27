<template>
  <div class="bottom-bar" @click="handleLinkClick">
    <div class="left">
      <p class="logo"></p>
      <span class="font-32">玖富犇犇</span><br>
      <span class="font-24">智能港美股</span>
    </div>
    <div class="right">
      打开App
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

// 腾讯应用宝下载玖富犇犇APP
const DOWNLOAD_APP = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.sunline.android.sunline'
export default {
  methods: {
    // 打开链接 - app下载
    handleLinkClick() {
      window.location.href = DOWNLOAD_APP
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/stylus/variable'
@import '~assets/stylus/mixin'

.bottom-bar
  display flex
  align-items center
  justify-content space-between
  height 100%
  width 100%
.left
  width 250px
  margin-left 25px
  .logo
    bg-image('app',true)
    float left
  span
    margin-left 20px
  .font-32
    font-size 32px
    line-height 40px
  .font-24
    font-size 24px
    color #E3E1E0
.right
  width 120px
  height 54px
  background rgba(249,90,41,1)
  border 2px solid rgba(249,90,41,1)
  border-radius 4px
  font-size 24px
  margin-right 25px
  text-align center
  line-height 54px
</style>
