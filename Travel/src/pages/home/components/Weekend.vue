<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必游TOP10',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
          title: '上海城市观光',
          desc: '来这里寻找你所认识的上海'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
          title: '情迷博物馆',
          desc: '穿梭时光岁月寻找答案'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b3/671f666cc7845a.jpg_r_640x214_f977f30c.jpg',
          title: '帆船游艇出海',
          desc: '乘风破浪，直挂云帆济沧海'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/mixins.styl'
  .title
    color black
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height 0
    overflow: hidden
    padding-bottom: 33.9%;
  .item-img
    width: 100%
  .item-info
    padding: .1rem
  .item-title
    line-height: .52rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color #ccc
    ellipsis()
</style>
