<template>
  <div :class="$style.contacts">
    <!-- <UiPreloaderPage v-if="fetchState.pending"></UiPreloaderPage> -->
    <div class="">
      <ui-container>
        <div :class="$style.description">
          Koshta is a collective of art-directors, media artists, designers, producers and curators. We truly believe in boundless imagination and realize our works beyond the limits of conventional reality.
        </div>
      </ui-container>
      <!-- <VueSlickCarousel v-if="slider" lazyLoad="ondemand" :adaptiveHeight="false" :speed='250' :class="$style.slider" :arrows="true" :dots="true">
        <img v-for="(url, index) in slider" :src="url" alt="">
      </VueSlickCarousel> -->
      <flickity v-if="slider" :class="[
        $style.slider,
        slider.length > 1 ? 'pagination' : 'pagination-off',
        'flickity-block'
        ]" ref="flickity" :options="flickityOptions" :src="url">
        <nuxt-img loading="lazy" v-for="(url, index) in slider" :key="index" :src="url" />
      </flickity>
      <main-footer/>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>