import { ref, onMounted, useContext } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  setup() {
    const { store } = useContext()
    const mainVideo = ref(null) 
    const projects = ref(null)
    const fullpageOptions = ref({
      start: 0,
      dir: 'v',
      duration: 500,
      scrollOverflow: true,
      keyboardScrolling: true,
      start: 0,
      beforeChange: function (currentSlideEl,currenIndex,nextIndex) {
        if (nextIndex === 1) {
          startMainVideo()
        }
        if (currenIndex === 1) {
          stopMainVideo()
        }
        if (currenIndex === 3) {
          store.commit('layout/showInterface')
        }
        if (nextIndex === 3 ) {
          console.log('3')
          store.commit('layout/hideInterface')
        }
      },
      afterChange: function (currentSlideEl,currenIndex) {
        if (currenIndex === 2) {
          setOverflowBlock()
        }
      }
    })
    const setOverflowBlock = () => {
      const blockHeight = projects.value.scrollHeight - projects.value.offsetHeight
        projects.value.onwheel = e => {
          if (projects.value.scrollTop <= 0 || projects.value.scrollTop === blockHeight) {
            if (e.deltaY > 85 || e.deltaY < -85) {
              return
            }
            else {
              e.stopPropagation()
            }
          }
          else {        
            e.stopPropagation()
          }
        };
        projects.value.style.overflow = 'auto'
    }
    const startMainVideo = () => {
      mainVideo.value.$el.play()
    }
    const stopMainVideo = () => {
      mainVideo.value.$el.pause()
    }
    
    onMounted(() => {
    })
    return {
      fullpageOptions,
      mainVideo,
      projects,
      setOverflowBlock,
      stopMainVideo,
      startMainVideo
    }
  }
  
}