<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont header-back-icon">&#xe624;</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .header
    position: relative
    overflow hidden
    text-align: center
    color white
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor
    font-size .32rem
    .header-back-icon
      text-align center
      font-size .44rem
      width: .64rem
      position: absolute
      top:0
      left 0
      color white
</style>
