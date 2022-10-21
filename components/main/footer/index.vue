<template>
  <Footer :footerInfo="footerInfo" class="main-footer"/>
</template>
<script>
  import { onMounted, useContext } from '@nuxtjs/composition-api'
  export default {
    name: 'main-footer',
    props: {
      footerInfo: {
        type: Object,
        default: () => {}
      }
    },  
    setup() {
      const { store } = useContext()
      const startObserveFooter = () => {
        console.log('start observ')
        const footer = document.querySelector('.main-footer')
        let options = {
            threshold: 0.5
        }
        const callback = (entries) => {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              console.log(true)
              if ( window.innerWidth <= 768 ) {
                store.commit('layout/hideInterface') 
                store.commit('layout/hideInterfaceObs') 
              }
            } else {
              console.log(false)
              if ( window.innerWidth <= 768 ) {
                store.commit('layout/showInterface')
                store.commit('layout/showInterfaceObs')
              }
            }
          });
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(footer);
      }
      onMounted(() => {
        startObserveFooter()
      })
      return {
        startObserveFooter
      }
    }
  }
</script>