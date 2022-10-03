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
    <transition name="fade">
      <LayoutFooterCookies
      v-if="isShowInterface"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      :class="$style.cookies"
      />
    </transition>
    <Nuxt />
  </div>  
</template>

<style lang="scss" module>
  $zIndexHeader: 10;
  .logotype {
    position: fixed;
    left: 4rem;
    top: 4rem;
    z-index: $zIndexHeader;
  }
  .nav {
    position: fixed;
    right: 4rem;
    top: 5.4rem;
    z-index: $zIndexHeader;
  }
  .provided {
    position: fixed;
    bottom: 4rem;
    left: 4rem;
    z-index: $zIndexHeader;
  }
  .cookies {
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    z-index: $zIndexHeader;
  }
</style>

<script>
  import { useContext, computed } from '@nuxtjs/composition-api'
  export default {
    name: 'layout-default',
    setup() {
      const { store } = useContext()
      const noClickedMatter = computed(() => {
        return store.state?.matter?.matterClicked
      })
      const isShowInterface = computed(() => {
        return store.state?.layout?.isShow
      })
      return {
        noClickedMatter,
        isShowInterface
      }
    }
  }
</script>
