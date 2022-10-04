<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example">
      <start-page/>
      <div class="page-2 page">
        <main-video ref="mainVideo"></main-video>
      </div>
      <div ref="projects" class="page-3 page">
        <ui-container>
          <main-projects :headerOptions="headerOptions" ref=""></main-projects>
        </ui-container>
      </div>
      <div class="page no-layout">
        <main-footer></main-footer>
      </div>
    </div>
  </div>

</template>

<script src="./setup.js"></script>