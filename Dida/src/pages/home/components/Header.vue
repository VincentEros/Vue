<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align center
        font-size .44rem
    .header-input
      flex: 1
      line-height: .64rem
      margin: .12rem .2rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc
      padding-left 5px
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      font-size 16px
      color white
</style>
