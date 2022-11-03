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
    })
    return {
      isMobile,
      mainVideo,
      playVideo,
      stopVideo
    }
  }
}