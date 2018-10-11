<template>
  <div class="container">
    <home-video></home-video>
    <div class="content">
      <home-header></home-header>
      <home-middle></home-middle>
      <home-footer></home-footer>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeVideo from './components/homeVideo'
import HomeMiddle from './components/middle'
import HomeFooter from './components/footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeVideo,
    HomeMiddle,
    HomeFooter
  },
  data () {},
  computed: {},
  methods: {},
  mounted () {},
  activated () {}
}
</script>

<style lang="stylus" scoped>
  html, body, .container
    width 100%
    height 100%
  .container
    position: relative

</style>
