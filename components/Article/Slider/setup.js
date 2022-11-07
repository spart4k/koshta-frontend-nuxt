import { useContext, ref, useFetch, computed } from '@nuxtjs/composition-api'
  export default {
    name: 'article-slider',
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
      const flickityOptions = ref({
        prevNextButtons: true,
        pageDots: true,
        wrapArround: true,
        // adaptiveHeight: true,
        imagesLoaded: true
        
      })
      const slider = computed(() => {
        let array = []
        props?.options?.imageOrVideo.data.forEach(element => {
          let url = $axios.defaults.baseURL + element.attributes.url
          let item = {
            type: element.attributes.ext === '.mp4' || element.attributes.ext === '.webm' ? 'video' : 'image',
            url
          }
          array.push(item)
        })
        return array
      })
      return {
        slider,
        flickityOptions
      }
    }
  }