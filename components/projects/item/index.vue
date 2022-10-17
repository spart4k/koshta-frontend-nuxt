<template>
  <div :class="$style.project">
    <div :class="$style.section">
      NFT & Metavers
    </div>
    <div :class="$style.info">
      <div @click="openProject()" :class="$style.title">
        {{ caseInfo.Title }}
      </div>
      <div :class="$style.author">
        – «Zodiac»
      </div>
    </div>
    <div :class="$style.wrap">
      <img src="@/assets/images/projects/wrap.png" alt="">
    </div>
    <div :class="$style.date" class="">
      14.07.2022
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>