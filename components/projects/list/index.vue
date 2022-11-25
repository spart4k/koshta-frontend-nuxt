<template>
  <div :class="$style.projects">
    <projects-item v-for="(item, index) in formatetCases" 
    :key="item.id" 
    :case="item"/>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>