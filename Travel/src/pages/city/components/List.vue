<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="city of hot" :key="city.id" @click="handleCityClick(city.name)">
            <div class="button">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(itemobj, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="item of itemobj" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  name: 'CityList',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow hidden
    position: absolute
    top: 1.56rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height:.6rem
      background: #f5f5f5
      padding-left: .2rem
      color #666
      font-size .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        float: left
        .button
          margin: .1rem
          text-align: center
          border .02rem solid #ccc
          padding: .1rem
          border-radius .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
