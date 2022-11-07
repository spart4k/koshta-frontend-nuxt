import { useContext, ref, useFetch, computed } from '@nuxtjs/composition-api'
  export default {
    name: 'article-image',
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
    setup(props, ctx) {
      const { store, $axios } = useContext()
      const mainImage = computed(() => {
        const url = $axios.defaults.baseURL + props.options?.image?.data?.attributes?.url
        return url
      })
      return {
        mainImage
      }
    }
  }