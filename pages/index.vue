<template>
  <div class="fullpage-container">
    <!-- <UiPreloaderPage v-if="fetchState.pending"/> -->
    <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example">
      <start-page/>
      <div class="page-2 page">
        <main-video v-if="mainVideoUrls" :mainVideoUrls="mainVideoUrls" ref="mainVideo"></main-video>
      </div>
      <div ref="projects" class="page-3 projects">
        <ui-container :class="$style.projectsContent">
          <main-projects v-if="cases" :cases="cases.data" :headerOptions="headerOptions" ref=""></main-projects>
        </ui-container>
        <main-footer class="index-footer" :class="$style.footer"></main-footer>
      </div>
      <!-- <div class="page no-layout">
        
      </div> -->
    </div>
    <transition name="fade">
      <svg v-if="showButtonNext" :class="$style.nextSlide" @click="nextSlide" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </svg>
    </transition>
  </div>

</template>
<style lang="scss" scoped module src="./style.scss"></style>
<script src="./setup.js"></script>