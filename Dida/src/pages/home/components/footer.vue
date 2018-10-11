<template>
  <footer class="footer">
    <nav class="nav-warpper">
      <a href="/agreement/">了解产品</a>
      <span>·</span>
      <a href="/privacy/">守则须知</a>
      <span>·</span>
      <a href="/recovery_account/">联系我们</a>
      <span>·</span>
      <a href="/aboutus/">关于嘀嗒</a>
    </nav>
    <div class="feedback-info">
      <p>
        <span id="copyYear">© 2013－2018</span>
        &nbsp;&nbsp;嘀嗒出行&nbsp;&nbsp;&nbsp;京ICP备14055018号&nbsp;&nbsp;北京畅行信息技术有限公司
      </p>
      <div class="gongan-box"><img src="/static/images/beian.png">
        京公网安备 11010502033733号
        <span>&nbsp;  &nbsp;地址&nbsp;:&nbsp;北京市朝阳区创远路36号院朝来科技园&nbsp;</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="stylus" scoped>
.footer
  font-size: 14px
  width: 100%
  background: transparent
  text-align: center
  position: fixed
  bottom: 30px
  .nav-warpper {
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
    margin-bottom: 16px;}
  .nav-warpper>a {
    padding: 0 5px;
    color: #fff;
  }
  .feedback-info {
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,.7);
  }
  .feedback-info>p {
    line-height: 25px;
  }
  .gongan-box {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
