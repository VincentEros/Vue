<template>
  <header class="header">
    <div class="logo">
      <img src="https://static.didapinche.com/pics//g/home/icon03.png" alt="">
    </div>
    <div class="nav">
      <div class="menu">
        <div>菜单</div>
      </div>
    </div>
  </header>
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
  .menu
    margin-top 20px
    display flex
    flex-direction row
    cursor pointer
  .menu>div
    height 50px
    line-height 50px
    margin 0 30px
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);

</style>
