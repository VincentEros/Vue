<template>
  <div>
    <div class="title">❤猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
          title: '上海迪士尼乐园',
          desc: '随它吧,随它吧,这里永远是你的家'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/97/97d57e2d8cee926d.water.jpg_200x200_b000d264.jpg',
          title: '澳门旅游观光塔',
          desc: '澳门线上赌场,美女荷官在线发牌'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1408/28/511b24d8ca61752a581edbf8509865d4.jpg_200x200_5a6e3bc6.jpg',
          title: '万神殿',
          desc: '俯仰之间,灵魂临受万神的苛责'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p19/201211/08/133aa1fc1a44d1d493835fbb.jpg_200x200_25b16e00.jpg',
          title: '卢浮宫',
          desc: '多少年建成的,我已记不清了'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/mixins.styl'
  .title
    color red
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height 1.9rem
    .item-img
      width: 1.7rem
      height 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
    .item-title
      line-height: .52rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .1rem
      border-radius .06rem
      color: #fff;
</style>
