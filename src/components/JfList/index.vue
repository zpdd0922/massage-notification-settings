<template>
  <div class="jf-list">
    <ul>
      <li v-for="(item, index) in list"
          :key="index"
          :class="['item', index !== list.length && 'border-bottom-1px']">
        <template v-if="item.img">
          <img class="item-icon" :src="item.img">
        </template>
        <div class="item-media">
          <div class="media-txt">
            <h3 class="txt-name">{{item.name}}</h3>
            <p class="txt-desc">{{item.desc}}</p>
          </div>
          <div class="media-tip">
            <!-- 我们为每个 item 准备了一个插槽，-->
            <!-- 将 `item` `index` 对象作为一个插槽的 prop 传入。-->
            <slot :item="item" :index="index">
              <span class="tip-desc">{{item.tip}}</span>
            </slot>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'JfList',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus">
@import '~assets/stylus/variable.styl'
@import '~assets/stylus/mixin.styl'

.jf-list
  padding-left 25px
  background $color-fff
  .item
    padding 28px 25px
    padding-left 0
    overflow hidden
  .item-icon
    width 84px
    height 84px
    float left
    margin-left 17px
  .item-media
    height 84px
    display flex
    overflow hidden
    padding-left 18px
    align-items center
    justify-content space-between
  .media-txt
    no-wrap()
    flex 1
  .txt-name
    no-wrap()
    font-size 32px
    color $color-text
  .txt-desc
    no-wrap()
    font-size 24px
    margin-top 18px
    color $color-999
  .tip-desc
    display block
    font-size 34px
    color $color-999
</style>
