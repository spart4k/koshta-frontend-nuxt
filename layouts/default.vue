<template>
  <div>
    <!-- <HeaderDefault/> -->
    <transition name="fade">
      <LayoutHeaderLogotype
      v-if="isShowInterface"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      :class="$style.logotype"
      />
    </transition>
    <transition name="fade">
      <LayoutHeaderNav
      v-if="isShowInterface"
      :class="$style.nav"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      />
    </transition>
    <transition name="fade">
      <LayoutFooterProvided
      v-if="isShowInterface"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      :class="$style.provided"
      />
    </transition>
    <LayoutFooterCookies
    :style="{
      'pointer-events': noClickedMatter ? 'none' : 'unset'
    }"
    :class="$style.cookies"
    />
    <Nuxt />
  </div>  
</template>

<style lang="scss" module>
  $zIndexHeader: 100;
  .logotype {
    position: fixed;
    left: 4rem;
    top: 4rem;
    z-index: $zIndexHeader;
    @media (max-width: $mobileWidth) {
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .nav {
    position: fixed;
    right: 4rem;
    top: 5.4rem;
    z-index: $zIndexHeader;
    z-index: 10;
  }
  .provided {
    position: fixed;
    bottom: 4rem;
    left: 4rem;
    z-index: $zIndexHeader;
    @media (max-width: $mobileWidth) {
      display: none;
    }
  }
  .cookies {
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    z-index: $zIndexHeader;
    @media (max-width: $mobileWidth) {
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 2rem;
      z-index: 1;
    }
  }
</style>

<script>
  import { useContext, computed, onMounted } from '@nuxtjs/composition-api'
  export default {
    name: 'layout-default',
    setup() {
      const { store, route } = useContext()
      const noClickedMatter = computed(() => {
        return store.state?.matter?.matterClicked
      })
      const isShowInterface = computed(() => {
        return store.state?.layout?.isShow
      })
      
      onMounted(() => {
      })
      return {
        noClickedMatter,
        isShowInterface,
        route
      }
    }
  }
</script>
