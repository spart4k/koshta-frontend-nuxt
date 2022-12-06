<template>
  <div class="wrapLoading" :class="$style.mainVideo">
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
    <div v-if="true" class="">
      <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
                <stop stop-color="#000" stop-opacity="0" offset="0%"/>
                <stop stop-color="#000" stop-opacity=".631" offset="63.146%"/>
                <stop stop-color="#000" offset="100%"/>
            </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)">
                <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite" />
                </path>
                <circle fill="#000" cx="36" cy="18" r="1">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite" />
                </circle>
            </g>
        </g>
      </svg>
    </div>
  </div>

</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>