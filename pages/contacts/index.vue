<template>
  <div class="">
    <ui-container>
      <div :class="$style.description">
        Koshta is a collective of art-director, media artists, designers, producers and curators. We truly believe in boundless imagination and realize our works beyond the limits of conventional reality.
      </div>
    </ui-container>
    <VueSlickCarousel v-if="slider" :class="$style.slider" :arrows="true" :dots="true">
      <img v-for="(url, index) in slider" :src="url" alt="">
    </VueSlickCarousel>
    <main-footer/>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>