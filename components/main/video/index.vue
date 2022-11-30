<template>
  <div :class="$style.mainVideo">
    <div :class="$style.textBlock">
      Koshta is expanding imagination
    </div>
    <video ref="mainVideo" :muted="$props.setAutoplay" loop playsinline webkit-playinginline id="mainVideo">
      <!-- <source v-if="!isMobile" :src="mainVideoUrls.desktop" type="video/webm"> -->
      <source v-if="!isMobile" poster="https://koshta.c.roky.rocks/uploads/mainposter_ba70b0b94a.png?updated_at=2022-10-19T17:58:47.272Z" :src="mainVideoUrls ? mainVideoUrls.desktop : ''" type="video/mp4">
      <source v-if="isMobile" poster="https://koshta.c.roky.rocks/uploads/mainpostermobile_dbb55586ea.png?updated_at=2022-10-19T17:58:46.214Z" :src="require('@/assets/video/mainvideomobile.webm')" type="video/webm">
      <source v-if="isMobile" poster="https://koshta.c.roky.rocks/uploads/mainpostermobile_dbb55586ea.png?updated_at=2022-10-19T17:58:46.214Z" :src="mainVideoUrls ? mainVideoUrls.mobile : ''" type="video/mp4">
      
      <!-- <source v-if="isMobile" :src="mainVideoUrls.mobile" type="video/mp4"> -->
    </video>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>