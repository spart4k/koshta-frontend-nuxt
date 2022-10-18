<template>
  <video ref="mainVideo" v-if="true" :muted="$props.setAutoplay" autoplay loop playsinline webkit-playinginline id="mainVideo">
    <!-- <source v-if="!isMobile" :src="mainVideoUrls.desktop" type="video/webm"> -->
    <source v-if="!isMobile" :src="mainVideoUrls ? mainVideoUrls.desktop : ''" type="video/mp4">
    <source v-if="isMobile" :src="mainVideoUrls ? mainVideoUrls.mobile : ''" type="video/webm">
    <!-- <source v-if="isMobile" :src="mainVideoUrls.mobile" type="video/mp4"> -->
  </video>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>