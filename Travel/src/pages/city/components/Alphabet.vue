<template>
  <div class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .list
    display: flex
    flex-direction column
    justify-content center
    list-style none
    position: absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      text-align center
      line-height: .4rem
      font-size .3rem
      color: $bgColor
</style>
