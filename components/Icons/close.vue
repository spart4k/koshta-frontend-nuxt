<template>
  <svg @click="emitClick" class="icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.3999 18L17.5999 2" stroke="#241F21" stroke-width="3" stroke-linecap="round"/>
    <path d="M18 17.6L2 2.40001" stroke="#241F21" stroke-width="3" stroke-linecap="round"/>
  </svg>  
</template>

<script>
  import { } from '@nuxtjs/composition-api'
  export default {
    name: 'nav-open',
    setup(props, ctx) {
      const { emit } = ctx
      console.log(emit)
      const emitClick = () => {
        emit('click')
      }
      return {
        emitClick
      }
    }
  }
</script>