<template>
  <div class="">
    <div :class="$style.mainImage">
      <!-- <img :src="mainImage" alt=""> -->
      <img v-if="mainImage" :src="mainImage" />
    </div>
  </div>
</template> 
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>