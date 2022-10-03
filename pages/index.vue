<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOptions" ref="example">
      <start-page/>
      <div class="page-2 page">
        <main-video ref="mainVideo"></main-video>
      </div>
      <div class="page-3 page">
        <ui-container>
          <main-projects ref=""></main-projects>
        </ui-container>
      </div>
    </div>
  </div>
  
</template>

<script src="./setup.js"></script>