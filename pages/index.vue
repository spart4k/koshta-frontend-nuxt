<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example">
      <start-page/>
      <div class="page-2 page">
        <video ref="mainVideo" muted loop id="mainVideo" src="@/assets/video/mainvideomp4.mp4"></video>
      </div>
      <div class="page-3 page">
        <p class="part-3">fullpage-vue</p>
        <p class="part-3">fullpage-vue</p>
        <p class="part-3">fullpage-vue</p>
      </div>
    </div>
  </div>
</template>

<script src="./setup.js"></script>