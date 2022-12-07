<template>
  <div :class="$style.section">
    <div :class="$style.wrapPage">
      <ui-container>
        <ui-page-title-default 
        :options="headerOptions"
        :class="$style.header" />
        <UiPreloaderDefault v-if="fetchState.pending "/>
        <projects-list v-else :cases="sectionInfo.cases.data"/>
      </ui-container>
      <main-footer :class="$style.footer"></main-footer>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>
