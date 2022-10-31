<template>
  <div :class="$style.project">
    <UiPreloaderPage v-if="fetchState.pending" class="containerLoading"/>
    <div v-else class="wrapLoading">
      <ui-container>
        <ui-page-title-project :options="headerInfo"></ui-page-title-project>
      </ui-container>
      <div :class="$style.orderList">
        <ui-container :style="{
          'order': orderList ? orderList.image : 1
        }" class="noPaddingTop">
          <div class="">
            <div :class="$style.mainImage">
              <!-- <img :src="mainImage" alt=""> -->
              <nuxt-img loading="lazy" v-if="mainImage" :src="mainImage" />
            </div>
          </div>
        </ui-container>
        <ui-container v-if="mainVideo" :style="{
          'order': orderList ? orderList.video : 1
        }" class="noPaddingTop">
          <div :class="[
            $style.mainVideo,
            orderList.video === 1 ? $style.fullWidth : ''
            ]">
            <video ref="mainVideo" controls loop playsinline webkit-playinginline id="mainVideo">
              <source poster="https://koshta.c.roky.rocks/uploads/mainposter_ba70b0b94a.png?updated_at=2022-10-19T17:58:47.272Z" :src="mainVideo" type="video/mp4">
            </video>
          </div>
        </ui-container>
        <ui-container :style="{
          'order': orderList ? orderList.text : 2
        }" class="noPaddingTop">
          <div v-if="richText" :class="$style.infoText">
            <p v-for="(block, index) in richText">
              {{ block.data.text }}
            </p>
          </div>
        </ui-container>
        <!-- <VueSlickCarousel :style="{
          'order': orderList ? orderList.slider : 3
        }" v-if="slider" :class="$style.slider" :arrows="true" lazyLoad="ondemand" :adaptiveHeight="false" :speed='250' :dots="true">
          <nuxt-img loading="lazy" v-for="(url, index) in slider" :src="url" />
        </VueSlickCarousel> -->
        <flickity :style="{
          'order': orderList ? orderList.slider : 3
        }" v-if="slider" :class="$style.slider" ref="flickity" :options="flickityOptions" :src="url">
        <nuxt-img loading="lazy" v-for="(url, index) in slider" :src="url" />
        </flickity>
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