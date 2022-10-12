import { ref, onMounted, useContext } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  components: {
  },
  setup(props, ctx) {
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
        if (nextIndex === 1) {
          startMainVideo()
        }
        if (currenIndex === 1) {
          stopMainVideo()
          fullpageOptions.value.disabled = true
        }
        if (currenIndex === 2) {
          // fullpageOptions.value.setAutoScrolling = false
          // store.commit('layout/showInterface')
        }
        if (nextIndex === 2 ) {
          // store.commit('layout/hideInterface')
        }
      },
      afterChange: function (currentSlideEl,currenIndex) {
        if (currenIndex === 2) {
          setOverflowBlock()
        }
      }
    })
    const setOverflowBlock = () => {
      const blockHeight = projects.value.scrollHeight - projects.value.offsetHeight; 
      manageStateFullpage()
      projects.value.onwheel = e => {
        manageStateFullpage()
        if (projects.value.scrollTop <= 0 || projects.value.scrollTop === blockHeight) {
          if (e.deltaY > 100 || e.deltaY < -100) {
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
    const manageStateFullpage = () => {
      if (projects.value.scrollTop === 0 || projects.value.scrollTop < 0) {
        store.commit('fullpage/changeState', false)
      }
      else {
        store.commit('fullpage/changeState', true)
      }
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
      startMainVideo,
      headerOptions,
      example
    }
  },
  methods: {

  },
  watch: {
    disabledFullpage(newVal,oldVar) {
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
    // this.$refs.example.$fullpage.$update();
  }
  
}