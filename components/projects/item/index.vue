<template>
  <div v-if="caseInfo" @click="openProject()" :class="$style.project">
    <div :class="$style.section">
      {{ section }}
    </div>
    <div :class="$style.info">
      <div :class="$style.title">
        {{ caseInfo.title }}
      </div>
      <div :class="$style.author">
        – {{ caseInfo.subtitle }}
      </div>
    </div>
    <div :class="$style.wrap">
      <!-- <img :src="wrap" alt=""> -->
      <nuxt-img loading="lazy" :src="wrap" />
    </div>
    <!-- <div :class="$style.date" class="">
      {{ date }}
    </div> -->
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>