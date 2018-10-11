<template>
  <div class="video-bg">
    <video muted="" data-autoplay="" loop="loop" autoplay="autoplay" src="//s3.bytecdn.cn/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4" class="video-tvc" id="video-tvc" data-object-fit="">抱歉，您的浏览器不支持内嵌视频</video>
  </div>
</template>

<script>
export default {
  name: 'homeVideo'
}
</script>

<style lang="stylus" scoped>
  .video-bg
    height: 100%;
    width: 100%;
  .video-tvc {
    position fixed
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>
