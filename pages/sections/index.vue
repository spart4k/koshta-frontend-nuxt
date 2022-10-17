<template>
  <ui-container>
    <ui-page-title-default 
    :options="headerOptions"
    :class="$style.header" />
    <projects-list></projects-list>
  </ui-container>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>
