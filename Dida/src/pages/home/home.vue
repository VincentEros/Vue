<template>
  <div>
    <home-video></home-video>
    <div class="content">
      <home-header></home-header>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeVideo from './components/homeVideo'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeVideo
  },
  data () {},
  computed: {},
  methods: {},
  mounted () {},
  activated () {}
}
</script>

<style lang="stylus" scoped>
</style>
