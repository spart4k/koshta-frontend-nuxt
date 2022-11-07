import { useContext, ref, useFetch, computed } from '@nuxtjs/composition-api'
  export default {
    name: 'article-video',
    props: {
      // footerInfo: {
      //   type: Object,
      //   default: () => {}
      // }
      options: {
        type: Object,
        default: () => {}
      },
      order: {
        type: Number,
        default: null
      }
    },
    setup(props) {
      const { store, $axios } = useContext()
      const mainVideo = computed(() => {
        const url = $axios.defaults.baseURL + props?.options?.video?.data?.attributes?.url
        return url
      })
      const hasPoster = computed(() => {
        if (props?.options?.poster?.data) {
          return true
        } else {
          return false
        }
      })
      const mainVideoPoster = computed(() => {
        const url = $axios.defaults.baseURL + props?.options?.poster?.data?.attributes?.url
        return url
      })
      return {
        mainVideo,
        mainVideoPoster,
        hasPoster
      }
    }
  }