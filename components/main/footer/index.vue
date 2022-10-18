<template>
  <Footer :footerInfo="footerInfo" class="main-footer"/>
</template>
<script>
  import {} from '@nuxtjs/composition-api'
  export default {
    name: 'main-footer',
    props: {
      footerInfo: {
        type: Object,
        default: () => {}
      }
    },  
    setup() {
      return {
        
      }
    }
  }
</script>