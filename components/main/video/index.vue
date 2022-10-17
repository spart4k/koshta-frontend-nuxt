<template>
  <video ref="mainVideo" :muted="$props.setAutoplay" loop playsinline webkit-playinginline id="mainVideo">
    <source v-if="!isMobile" src="@/assets/video/mainvideo.webm" type="video/webm">
    <source v-if="!isMobile" src="@/assets/video/mainvideomp4.mp4" type="video/mp4">
    <source v-if="isMobile" src="@/assets/video/mainvideomobile.webm" type="video/webm">
    <source v-if="isMobile" src="@/assets/video/mainvideomobile.mp4" type="video/mp4">
  </video>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>