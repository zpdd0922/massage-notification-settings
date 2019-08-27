<template>
  <transition name="jf-dialog-fade">
    <div :class="['jf-popup', 'jf-dialog', mask && 'jf-popup_mask']"
          v-show="visible">
      <div class="popup-mask" @touchmove.prevent></div>
      <div class="popup-wrap">
        <div class="wrap-content">
          <slot>

          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    // 是否可见
    visible: {
      type: Boolean,
      default: false
    },
    // 是否显示遮盖
    mask: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    hide() {
      // 同步属性
      this.$emit('update:visible', false)
    },
    // handleCancel(e) {
    //   this.hide()
    //   this.$emit('cancel', e)
    // },
    // handleConfirm(e) {
    //   this.hide()
    //   this.$emit('confirm', e)
    // },
    // handleClose(e) {
    //   this.hide()
    //   this.$emit('close', e)
    // }
  }
}

</script>

<style lang='stylus' scoped>
@import '~assets/stylus/variable.styl'
@import '~assets/stylus/mixin.styl'

.jf-popup
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 100
  .popup-mask
    overflow hidden
    background-color #000
    opacity .8
    pointer-events auto
  .popup-wrap
    transform translate(100%,100%)
  .wrap-content
    position absolute
    top -50%;
    left -50%
    width auto
    max-width 100%
    transform translate(-50%,-50%)
    box-sizing border-box


.popup-mask, .popup-wrap
  position absolute
  width 100%
  height 100%

.jf-popup_mask
    pointer-events auto
    .popup-mask
      display block

.jf-dialog-fade-enter-active
  animation dialog-fadein .4s
  .content-main
    animation dialog-zoom .4s

@keyframes dialog-fadein
  0%
    opacity 0
  100%
    opacity 1
@keyframes dialog-zoom
  0%
    transform scale(0)
  50%
    transform scale(1.1)
  100%
    transform scale(1)




</style>
