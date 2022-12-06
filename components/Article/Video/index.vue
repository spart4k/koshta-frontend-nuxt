<template>
  <div v-if="hasVideo" :class="[
    $style.mainVideo,
    $style.fullWidth
    ]">
    <video ref="mainVideo" controls :poster="hasPoster ? mainVideoPoster : ''" loop playsinline webkit-playsinline webkit-playinginline id="mainVideo">
      <source poster="https://koshta.c.roky.rocks/uploads/mainposter_ba70b0b94a.png?updated_at=2022-10-19T17:58:47.272Z" :src="mainVideo" type="video/mp4">
    </video>
  </div>
</template> 
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>