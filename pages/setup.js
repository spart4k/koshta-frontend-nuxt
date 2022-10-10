import { ref, onMounted, useContext } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  components: {
  },
  setup(props, ctx) {
    console.log(useContext())
    const { store } = useContext()
    const mainVideo = ref(null) 
    const projects = ref(null)
    const example = ref(null)
    const headerOptions = ref({
      title: "All projects",
      subtitle: "«I can't explain muself. I'm afraid. Sir», said Alice, because I am not myself, you see»"
    })
    const fullpageOptions = ref({
      dir: 'v',
      duration: 500,
      disabled: false,
      beforeChange: function (currentSlideEl,currenIndex,nextIndex) {
        console.log(currenIndex)
        if (nextIndex === 1) {
          startMainVideo()
        }
        if (currenIndex === 1) {
          stopMainVideo()
          fullpageOptions.value.disabled = true
        }
        if (currenIndex === 3) {
          // fullpageOptions.value.setAutoScrolling = false
          store.commit('layout/showInterface')
        }
        if (nextIndex === 3 ) {
          store.commit('layout/hideInterface')
        }
        if (currenIndex === 2) {
          console.log(this.$refs)
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
        
        if (projects.value.scrollTop === 0 || projects.value.scrollTop < 0) {
          console.log('ON FILLPAGE')
          store.commit('fullpage/changeState', false)
        }
        else {
          console.log('OFF FILLPAGE')
          store.commit('fullpage/changeState', true)
        }
        projects.value.onwheel = e => {
          console.log(projects.value.scrollTop)
          console.log(store.state.fullpage.disabled)
          if (projects.value.scrollTop === 0 || projects.value.scrollTop < 0) {
            console.log('ON FILLPAGE')
            store.commit('fullpage/changeState', false)
          }
          else {
            console.log('OFF FILLPAGE')
            store.commit('fullpage/changeState', true)
          }
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
        projects.value.touchstart = e => {
          console.log('touch')
        }
    }
    const startMainVideo = () => {
      mainVideo.value.$el.play()
    }
    const stopMainVideo = () => {
      mainVideo.value.$el.pause()
    }
    const moveNext = () => {
      document.addEventListener("wheel", (e) => {
        e.stopPropagation()
      })
      document.addEventListener("touchend", (e) => {
        console.log('end')
        e.stopPropagation()
      })
      // document.addEventListener('swiped', e => {
      //   console.log('swiped')
      //   alert('swiped-up')
      //   e.stopPropagation()
      // })
      // document.addEventListener('swiped-up', function(e) {
      //   alert('swiped-up')
      //   console.log('swiped-up'); // the element that was swiped
      //   e.stopPropagation()
      // })
      // document.addEventListener('touchstart', function(e) {
      //   // alert('touchstart')
      //   console.log('swiped-up'); // the element that was swiped
      //   // e.stopPropagation()
      // })
      document.addEventListener('scroll', function(e) {
        // console.log('scroll'); // the element that was swiped
        // e.stopPropagation()
      })
    }
    onMounted(() => {
      console.log(example.value)
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
  },
  methods: {
    initLog() {
      console.log('init')
      // this.$refs.example.$fullpage.setDisabled(true);
      setTimeout(() => {
        // this.$refs.example.$fullpage.setDisabled(false);
      },3000)
    }
  },
  watch: {
    disabledFullpage(newVal,oldVar) {
      console.log(oldVar,newVal)
      if (newVal) {
        this.$refs.example.$fullpage.setDisabled(true);
      }
      else {
        this.$refs.example.$fullpage.setDisabled(false);
      }
    }
  },
  computed: {
    disabledFullpage() {
      return this.$store.state.fullpage.disabled
    }
  },
  mounted() {
    this.initLog()
    console.log()
    
    // this.$refs.example.$fullpage.$update();
  }
  
}