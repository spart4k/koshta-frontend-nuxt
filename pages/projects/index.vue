<template>
  <div class="">
    <ui-container>
      <ui-page-title-project :options="headerInfo"></ui-page-title-project>
      <div class="">
        <div :class="$style.mainImage">
          <img src="@/assets/images/projects/projectWrap.png" alt="">
        </div>
        <div :class="$style.infoText">
          The task we accomplished for S7 Airlines was to develop visuals for seasonal promotions on their website. We decided that the concept of combining nature - with its circle of seasons - with high technologies would be best realized by 3D artist Lena Charobai, who addresses the aesthetics of ecodesign: she then created a series of visual images where biological forms are interwoven with synthetic materials.<br><br>
          We make no secret about the fact that we enjoy coming to work every day, nor that our colleagues are closer to a group of friends than just a professional team. This is why we put so much emphasis on hiring people who will slot right in with the rest of us, while also bringing something new and unique to our broad mix of individuals. 
        </div>
      </div>
    </ui-container>
    <VueSlickCarousel :class="$style.slider" :arrows="true" :dots="true">
      <img v-for="item in 5" src="@/assets/images/projects/slide.png" alt="">
    </VueSlickCarousel>
    <ui-container :class="$style.noPaddingTop">
      <div>
        <ui-page-title-default :class="$style.otherHeader" :options="otherProjectsHeader"></ui-page-title-default>
        <projects-list/>
      </div>
    </ui-container>
    <div>
      <main-footer :class="$style.footer"></main-footer>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"></style>