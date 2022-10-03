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
    const startMainVideo = () => {
      console.log(mainVideo.value)
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
      stopMainVideo,
      startMainVideo
    }
  }
  
}