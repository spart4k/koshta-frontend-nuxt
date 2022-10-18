<template>
  <ui-container>
    <ui-page-title-default 
    :options="headerOptions"
    :class="$style.header" />
    <projects-list :cases="sectionInfo"/>
  </ui-container>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>
