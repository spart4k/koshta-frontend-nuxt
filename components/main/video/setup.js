import { computed, onMounted } from '@nuxtjs/composition-api'
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
    const isMobile = computed(() => {
      if (process.client) {
        return window.innerWidth < 768
      }
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
      console.log(isMobile.value)
    })
    return {
      isMobile
    }
  }
}