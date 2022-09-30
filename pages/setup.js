import { ref, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  setup() {
    const mainVideo = ref(null) 
    const fullpageOptions = ref({
      start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (currentSlideEl,currenIndex,nextIndex) {
          if (nextIndex === 1) {
            startMainVideo()
          }
          if (currenIndex === 1) {
            stopMainVideo()
          }
        },
        afterChange: function (currentSlideEl,currenIndex) {
          console.log(currenIndex)
        }
    })
    const startMainVideo = async () => {
      await mainVideo.value.play()
    }
    const stopMainVideo = async () => {
      await mainVideo.value.pause()
    }
    
    onMounted(() => {
    })
    return {
      fullpageOptions,
      mainVideo,
      stopMainVideo,
      startMainVideo
    }
  }
  
}