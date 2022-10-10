import { ref, onMounted, onUnmounted } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  setup() {
    const mainVideo = ref(null) 
    const startMainVideo = () => {
      mainVideo.value.$el.play()
    }
    const stopMainVideo = () => {
      mainVideo.value.$el.pause()
    }
    onMounted(() => {
      startMainVideo()
    })
    onUnmounted(() => {
      // stopMainVideo()
    })
    return {
      mainVideo,
      stopMainVideo,
      startMainVideo,
    }
  }
  
}