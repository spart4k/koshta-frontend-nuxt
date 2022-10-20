<template>
  <div>
    <!-- <HeaderDefault/> -->
    <transition name="fade">
      <Logotype
      v-if="isShowInterface"
      @click="openIndex"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      :class="$style.logotype"
      />
    </transition>
    <transition name="fade">
      <LayoutHeaderNav
      :class="$style.nav"
      :style="{
        'pointer-events': noClickedMatter ? 'none' : 'unset'
      }"
      />
    </transition>
    <transition name="fade">
      <LayoutFooterProvided
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
    // position: fixed;
    left: 4rem;
    top: 4rem;
    z-index: $zIndexHeader;
    z-index: 10;
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
      z-index: 15;
    }
  }
</style>

<script>
  import { useContext, computed, useFetch, ref, onMounted, useRouter } from '@nuxtjs/composition-api'
  export default {
    name: 'layout-default',
    setup() {
      const { store, route } = useContext()
      const router = useRouter()
      const caseInfo = ref(null)
      const noClickedMatter = computed(() => {
        return store.state?.matter?.matterClicked
      })
      const isShowInterface = computed(() => {
        return store.state?.layout?.isShow
      })
      const openIndex = () => {
        router.push({
          path: '/'
        })
      }
      onMounted(() => {
      })
      return {
        noClickedMatter,
        isShowInterface,
        route,
        openIndex,
        caseInfo
      }
    }
  }
</script>