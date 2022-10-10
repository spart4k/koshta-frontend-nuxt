import { ref, onMounted, useContext } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  setup() {
    const { store } = useContext()
    const mainVideo = ref(null) 
    const projects = ref(null)
    const example = ref(null)
    const headerOptions = ref({
      title: "All projects",
      subtitle: "«I can't explain muself. I'm afraid. Sir», said Alice, because I am not myself, you see»"
    })
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
          // fullpageOptions.value.setAutoScrolling = false
          store.commit('layout/showInterface')
        }
        if (nextIndex === 3 ) {
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
    const moveNext = () => {
      document.addEventListener("wheel", (e) => {
        console.log('move')
        e.stopPropagation()
      })
      document.addEventListener('swiped', e => {
        console.log('swiped')
        alert('swiped-up')
        e.stopPropagation()
      })
      document.addEventListener('swiped-up', function(e) {
        alert('swiped-up')
        console.log('swiped-up'); // the element that was swiped
        e.stopPropagation()
      })
      document.addEventListener('touchstart', function(e) {
        // alert('touchstart')
        console.log('swiped-up'); // the element that was swiped
        // e.stopPropagation()
      })
      document.addEventListener('scroll', function(e) {
        alert('scroll')
        console.log('swiped-up'); // the element that was swiped
        e.stopPropagation()
      })
    }
    onMounted(() => {
      // moveNext()
    })
    return {
      fullpageOptions,
      mainVideo,
      projects,
      setOverflowBlock,
      stopMainVideo,
      startMainVideo,
      headerOptions,
      moveNext,
      example
    }
  }
  
}