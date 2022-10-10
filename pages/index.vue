<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example">
      <start-page/>
      <div class="page-2 page">
        {{ disabledFullpage }}
        <main-video ref="mainVideo"></main-video>
      </div>
      <div ref="projects" class="page-3 projects">
        <ui-container>
          <main-projects :headerOptions="headerOptions" ref=""></main-projects>
        </ui-container>
        <main-footer :class="$style.footer"></main-footer>
      </div>
      <!-- <div class="page no-layout">
        
      </div> -->
    </div>
  </div>

</template>
<style lang="scss" module src="./style.scss"></style>
<script src="./setup.js"></script>