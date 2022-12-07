<template>
  <div :class="$style.contacts">
    <div :class="$style.wrap">
      <!-- <UiPreloaderPage v-if="fetchState.pending"></UiPreloaderPage> -->
      <ui-container :class="$style.container">
        <div :class="[$style.description, $style.first]">
          Koshta.collective is an association of art directors, designers, producers, curators and media artists. Together we create visual content for brands, media and cultural institutions. Our works are not limited to certain genres — media artists come up with ideas based on their own creativity styles and methods.
          <br><br>
          Koshta.collective operates in a new paradigm where the boundaries of the analog and digital worlds become blurred, and content itself becomes art. We believe in boundless imagination and create our works well beyond the ordinary reality.
        </div>
        <!-- <div :class="[$style.description, $style.second]">
          Koshta.collective operates in a new paradigm where the boundaries of the analog and digital worlds become blurred, and content itself becomes art. We believe in boundless imagination and create our works well beyond the ordinary reality.
        </div> -->
      </ui-container>
      <!-- <VueSlickCarousel v-if="slider" lazyLoad="ondemand" :adaptiveHeight="false" :speed='250' :class="$style.slider" :arrows="true" :dots="true">
        <img v-for="(url, index) in slider" :src="url" alt="">
      </VueSlickCarousel> -->
      <client-only>
        <ui-container class="noPaddingTop">
          <!-- <RFlickity :items="1" :loop="false" :mouseDrag="false" :autoHeight="true" :dots="true" v-if="slider" :class="[
            $style.slider,
            slider.length > 1 ? 'pagination' : 'pagination-off',
            'flickity-block'
            ]" ref="flickity" :options="flickityOptions" :src="url">
            <nuxt-img loading="lazy" v-for="(url, index) in slider" :key="index" :src="url" />
          </RFlickity> -->
          <RFlickity :class="$style.slider" v-if="slider" ref="flickity" :options="optionsSlider">
            <img v-for="(url, index) in slider" :key="index" :src="url" />
            <!-- <video  loading="lazy" v-for="(item, index) in slider" :src="item.url" /> -->
            <!-- <video v-if="item.type === 'video'" v-for="(item, index) in slider" controls loop playsinline webkit-playinginline class="carousel-videl">
              <source :src="item ? item.url : ''" type="video/mp4">
            </video> -->
          </RFlickity>
        </ui-container>
      </client-only>
      <main-footer :class="$style.footer"/>
    </div>
    
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" scoped module src="./style.scss"></style>