<template>
  <div class="middle clearFloat">
    <div class="slogan">
      <img src="//s3a.bytecdn.cn/aweme/resource/web/static/image/index/slogan_2_8d59f13.png" alt="slogan">
    </div>
    <div class="btn-list">
      <a class="btn-primary icon-QRcode">
        <img src="/static/images/QRcode.png" alt="qrcode">
      </a>
      <div class="btn-primary">
        <a class="btn-hover icon-ios btn-link" href="https://itunes.apple.com/us/app/a.me-yin-le-duan-shi-pin-she-qu/id1142110895?l=zh&amp;ls=1&amp;mt=8"></a>
      </div>
      <div class="btn-primary">
        <a class="btn-hover icon-andorid btn-link" href="https://www.didapinche.com/app/adstat/?ad_id=10cf6f8c2c056460451b0f0d68aaef2b&ad_type=3rdparty&ad_title=%E5%AE%98%E7%BD%91%E9%A1%B5%E9%9D%A2%E5%AE%89%E5%8D%93%E7%AB%AFAPP%E4%B8%8B%E8%BD%BD%E7%9B%91%E6%B5%8B&url=http%3A%2F%2Fwww.didapinche.com%2Fgetapk.php"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'middle'
}
</script>

<style lang="stylus" scoped>
  .middle {
    width: 500px;
    position: fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-top: 50px;
    right: 150px;
  }
  .slogan {
    float: right;
    width: 450px;
    margin-bottom: 50px;
  }
  .slogan>img {
    width: 100%;
  }
  .btn-list {
    float: right;
    letter-spacing: -4px;
    font-size: 0;
  }
  .middle .btn-list .icon-QRcode {
    float: right;
    position: relative;
    width: 50px;
    height: 50px;
    background-image: url(//s3.bytecdn.cn/aweme/resource/web/static/image/index/download_476d015.png);
    }
  .btn-primary {
    display: inline-block;
    background: #fff;
    border-radius: 5px;
    margin-left: 10px;
    width: 130px;
    height: 50px;
    -webkit-transition: .15s opacity;
    transition: .15s opacity;
    -webkit-transition-delay: .15s;
    transition-delay: .15s;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 1px 1px 7px 2px rgba(0,0,0,.54);
  }
  .icon-QRcode>img
    width: 223px;
    border-radius 5px
    box-shadow: 1px 1px 7px 2px rgba(0,0,0,.54);
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transform: scale(0.23);
    transform: scale(0.23);
    -webkit-transform-origin: top right;
    transform-origin: top right;
    opacity: 0;
    -webkit-transition: .3s all;
    transition: .3s all;
  .icon-QRcode:hover>img
    opacity 1
    transform: scale(.8)

  .icon-ios {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(//s3a.bytecdn.cn/aweme/resource/web/static/image/index/appstore_0aecd08.png);
  }

  .icon-andorid {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 5px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(//s3a.bytecdn.cn/aweme/resource/web/static/image/index/android_088aebd.png);
  }
  .btn-hover:hover {
    opacity .5
  }
</style>
