<template>
  <div class="">
    <div :class="$style.mainImage">
      <!-- <img :src="mainImage" alt=""> -->
      <nuxt-img loading="lazy" v-if="mainImage" :src="mainImage" />
    </div>
  </div>
</template> 
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>