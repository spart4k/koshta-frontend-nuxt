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
        const footer = document.querySelector('.main-footer')
        let options = {
            // root: document.querySelector('#main-logotype'),
            threshold: 0.95
        }
        const callback = (entries) => {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              if ( window.innerWidth <= 768 ) {
                if (store.state.layout.isShow) {
                  store.commit('layout/hideInterface') 
                  store.commit('layout/hideInterfaceObs') 
                } 
              }
            } else {
              if ( window.innerWidth <= 768 ) {
                if (!store.state.layout.isShow) {
                  store.commit('layout/showInterface') 
                  store.commit('layout/showInterfaceObs')
                }
                
              }
            }
          });
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(footer);
      }
      const startObserveFooterLayout = () => {
        const footer = document.querySelector('.main-footer')
        let options = {
            // root: document.querySelector('#main-logotype'),
            threshold: 0.9
        }
        const callback = (entries) => {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              store.commit('layout/showInterfaceProvide') 
            } else {
              store.commit('layout/hideInterfaceProvide') 
            }
          });
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(footer);
      }
      
      onMounted(() => {
        setTimeout(() => {
          startObserveFooter()
          startObserveFooterLayout()
        }, 100)
        
      })
      return {
        startObserveFooter
      }
    }
  }
</script>