<template>
  <no-ssr>
    <!-- <flickity v-if="slider" :class="[
      $style.slider,
      slider.length > 1 ? 'pagination' : 'pagination-off',
      'flickity-block'
      ]" ref="flickity" :options="flickityOptions" :src="url">
      <nuxt-img v-if="item.type === 'image'" loading="lazy" v-for="(item, index) in slider" :src="item ? item.url : ''" />
      <video v-if="item.type === 'video'" v-for="(item, index) in slider" controls loop playsinline webkit-playinginline id="mainVideo">
        <source :src="item ? item.url : ''" type="video/mp4">
      </video>
    </flickity> -->
    <flickity @changed="changed" :items="1" class="carousel" :loop="false" :autoHeight="true" :dots="true">
      <img v-if="item.type === 'image'" loading="lazy" v-for="(item, index) in slider" :src="item ? item.url : ''" />
      <!-- <video  loading="lazy" v-for="(item, index) in slider" :src="item.url" /> -->
      <video v-if="item.type === 'video'" v-for="(item, index) in slider" controls loop playsinline webkit-playinginline class="carousel-videl">
        <source :src="item ? item.url : ''" type="video/mp4">
      </video>
    </flickity>
  </no-ssr>
</template> 
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>