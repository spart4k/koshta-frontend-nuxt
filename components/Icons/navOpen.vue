<template>
  <svg @click="emitClick" :class="$style.navOpen" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="3" cy="3" r="3" fill="currentColor"/>
    <circle cx="13" cy="3" r="3" fill="currentColor"/>
    <circle cx="23" cy="3" r="3" fill="currentColor"/>
  </svg>
</template>

<script>
  import { } from '@nuxtjs/composition-api'
  export default {
    name: 'nav-open',
    setup(props, ctx) {
      const { emit } = ctx
      const emitClick = () => {
        emit('click')
      }
      return {
        emitClick
      }
    }
  }
</script>

<style module lang="scss" scoped>
  .navOpen {
    width: 100%;
    height: 100%;
  }
</style>