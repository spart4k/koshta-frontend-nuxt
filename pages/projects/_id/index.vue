<template>
  <div :class="$style.project">
    <div :class="$style.wrapPage">
      <UiPreloaderPage v-if="fetchState.pending" class="containerLoading"/>
      <div v-else class="wrapLoading">
        <ui-container>
          <ui-page-title-project :options="headerInfo"></ui-page-title-project>
        </ui-container>
        <ui-container class="noPaddingTop">
          <div v-for="(item, index) in caseInfo.slider_or_text" v-if="caseInfo.slider_or_text" :class="$style.orderList">
            <component :options="item" :order="index" :is="getComponentName(item.__component)"/>
          </div>
        </ui-container>
        <ui-container v-if="allCaseList" :class="$style.otherProjects" class="noPaddingTop">
          <div>
            <ui-page-title-default class="otherProjects-title" :class="$style.otherHeader" :options="otherProjectsHeader"></ui-page-title-default>
            <projects-list :cases="allCaseList"/>
          </div>
        </ui-container>
      </div>
      
      <main-footer :class="$style.footer"></main-footer>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>