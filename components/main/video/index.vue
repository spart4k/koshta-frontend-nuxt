<template>
  <video ref="mainVideo" :muted="$props.setAutoplay" loop playsinline webkit-playinginline id="mainVideo">
    <source src="@/assets/video/mainvideo.webm" type="video/webm">
    <source src="@/assets/video/mainvideomp4.mp4" type="video/mp4">
  </video>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"></style>