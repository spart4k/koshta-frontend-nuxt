<template>
  <div :class="$style.start_page">
    <div ref="center" :class="$style.center">
      Koshta is a collective of art-director, media artists, designers, producers and curators. We truly believe in boundless imagination and realize our works beyond the limits of conventional reality.
    </div>
    <matter-main
    v-if="true"
    :centerOptions="options"
    :class="$style.matter"
    />
    <!-- <svg :class="$style.nextSlide" @click="nextSlide" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_173_276)">
      <rect width="50" height="50" rx="25" fill="white" fill-opacity="0.3"/>
      </g>
      <path d="M16 27L25 36L34 27" stroke="#241F21"/>
      <path d="M25 36L25 14" stroke="#241F21"/>
      <defs>
      <filter id="filter0_b_173_276" x="-100" y="-100" width="250" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_173_276"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_173_276" result="shape"/>
      </filter>
      </defs>
    </svg> -->
  </div>
</template>

<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>
