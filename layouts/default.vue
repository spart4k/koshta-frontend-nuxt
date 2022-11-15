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
      />
    </transition>
    <transition name="fade">
      <LayoutFooterProvided
      v-if="isShowProvide"
      :class="$style.provided"
      />
    </transition>
    <LayoutFooterCookies
    :class="$style.cookies"
    />
    <Nuxt />
  </div>  
</template>

<style scoped lang="scss" module>
  $zIndexHeader: 100;
  .logotype {
    // position: fixed;
    left: 19rem;
    top: 2rem;
    z-index: $zIndexHeader;
    @media (max-width: $mobileWidth) {
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .nav {
    position: fixed;
    right: 19rem;
    top: 3.4rem;
    z-index: $zIndexHeader;
    z-index: 10;
  }
  .provided {
    position: fixed;
    bottom: 4rem;
    left: 19rem;
    z-index: $zIndexHeader;
    @media (max-width: $mobileWidth) {
      display: none;
    }
  }
  .cookies {
    position: fixed;
    bottom: 4rem;
    right: 19rem;
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
      const isShowInterfaceObs = computed(() => {
        return store.state?.layout?.isShowObs
      })
      const isShowInterface = computed(() => {
        return store.state?.layout?.isShow
      })
      const isShowProvide = computed(() => {
        return store.state?.layout?.isShowProvide
      })
      const isMobile = computed(() => {
        if (process.client) {
          return window.innerWidth <= 768
        }
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
        caseInfo,
        isMobile,
        isShowInterfaceObs,
        isShowProvide
      }
    }
  }
</script>