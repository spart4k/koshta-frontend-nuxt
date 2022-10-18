<template>
  <div :class="$style.project">
    <div :class="$style.section">
      {{ section }}
    </div>
    <div :class="$style.info">
      <div @click="openProject()" :class="$style.title">
        {{ caseInfo.title }}
      </div>
      <div :class="$style.author">
        – {{ author.name }}
      </div>
    </div>
    <div :class="$style.wrap">
      <img :src="wrap" alt="">
    </div>
    <div :class="$style.date" class="">
      {{ date }}
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>