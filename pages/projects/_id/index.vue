<template>
  <div :class="$style.project">
    <UiPreloaderPage v-if="fetchState.pending" class="containerLoading"/>
    <div v-else class="wrapLoading">
      <ui-container>
        <ui-page-title-project :options="headerInfo"></ui-page-title-project>
      </ui-container>
      <div class="">
        <div v-for="(item, index) in caseInfo.slider_or_text" class="">
          {{ item.__component }}
        </div>
      </div>
      <div v-for="(item, index) in caseInfo.slider_or_text" :class="$style.orderList">
        <component :options="item" :order="index" :is="getComponentName(item.__component)"/>
      </div>
      <ui-container v-if="allCaseList" :class="$style.otherProjects" class="noPaddingTop">
        <div>
          <ui-page-title-default :class="$style.otherHeader" :options="otherProjectsHeader"></ui-page-title-default>
          <projects-list :cases="allCaseList"/>
        </div>
      </ui-container>
    </div>
    
    <main-footer :class="$style.footer"></main-footer>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>