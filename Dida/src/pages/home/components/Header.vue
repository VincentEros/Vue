<template>
  <div class="header">
    <div class="logo">
      <img src="https://static.didapinche.com/pics//g/home/icon03.png" alt="">
    </div>
    <div class="nav">
      <ul class="header-links">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
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
  .header
    position fixed
    top 0
    color red
    width 100%
    height 100px
    background-color gray opacity .1
    z-index 1001
  .logo
    float left
  .logo>img
    width 200px
    margin-left 50px
    margin-top 20px
  .nav
    float right
  .header-links
    margin-top 20px
    display flex
    flex-direction row
  .header-links>li
    height 50px
    line-height 50px
    margin 0 30px
    color #ffffff

</style>
