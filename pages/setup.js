import { ref, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  setup() {
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
      },
      afterChange: function (currentSlideEl,currenIndex) {
        if (currenIndex === 2) {
          const blockHeight = projects.value.scrollHeight - projects.value.offsetHeight
          projects.value.onwheel = e => {
            console.log(e.deltaY)
            if (projects.value.scrollTop <= 0 || projects.value.scrollTop === blockHeight) {
              if (e.deltaY > 85 || e.deltaY < -85) {
                console.log(e.deltaY)
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
      projects,
      stopMainVideo,
      startMainVideo
    }
  }
  
}