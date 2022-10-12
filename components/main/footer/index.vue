<template>
  <Footer class="main-footer"/>
</template>
<script>
  import { useContext, computed, onMounted } from '@nuxtjs/composition-api'
  export default {
    name: 'main-footer',
    setup() {
      const { store, route } = useContext()
      const manageLayoutElements = () => {
        const footer = document.querySelector('.main-footer')
        console.log(footer)
        if (footer) {
          const blockHeight = footer.scrollHeight - footer.offsetHeight;
          console.log(blockHeight)
          document.addEventListener('wheel', (e) => {
            console.log(footer)
            console.log(footer.pageY)
            if (document.scrollTop >= blockHeight) {
              store.commit('layout/hideInterface')
            }
            else {
              store.commit('layout/showInterface')
            }
          })
        }
      }
      onMounted(() => {
        manageLayoutElements()
      })
      return {
        manageLayoutElements
      }
    }
  }
</script>