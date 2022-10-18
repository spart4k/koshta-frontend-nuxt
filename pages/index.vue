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
        <main-footer :class="$style.footer"></main-footer>
      </div>
      <!-- <div class="page no-layout">
        
      </div> -->
    </div>
  </div>

</template>
<style lang="scss" scoped module src="./style.scss"></style>
<script src="./setup.js"></script>