<template>
  <div class="">
    <ui-page-title-default :options="headerOptions" :class="$style.header" />
    <projects-list :cases="$props.cases"></projects-list>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>