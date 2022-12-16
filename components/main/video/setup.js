import { computed, ref, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'main-video',
  props: {
    setAutoplay: {
      type: Boolean,
      default: true
    },
    mainVideoUrls: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    const mainVideo = ref(null)
    const loading = ref(true)
    const isMobile = computed(() => {
      if (process.client) {
        return window.innerWidth < 768
      }
    })
    const playVideo = () => {

      mainVideo.value.play()
    }
    const stopVideo = () => {
      mainVideo.value.pause()
    }
    const stateVideo = computed(() => {
      // console.log(mainVideo?.value?.readyState)
      return mainVideo?.value?.readyState
    })
    // const videos = ref([])
    // const fetchData = async () => {
    //   const data  = await store.dispatch('contacts/getContats')
    //   return data
    // }

    // const { fetch } = useFetch(async () => {
    //   try {
    //     const response = await fetchData()
    //     videos.value = response.attributes
    //   } catch (e) {
    //     console.log(e)
    //   }
    // })
    // fetch()
    onMounted(() => {
      mainVideo.value.addEventListener('loadeddata', (e) => {
        //Video should now be loaded but we can add a second check
        // console.log('load')
        console.log()
        if(mainVideo.value.readyState >= 3){
            //your code goes here
            loading.value = false
            // console.log('loaded')
        }
     
     });
    })
    return {
      isMobile,
      mainVideo,
      playVideo,
      stopVideo,
      stateVideo,
      loading
    }
  }
}