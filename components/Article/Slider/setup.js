import { useContext, reactive, ref, useFetch, computed } from '@nuxtjs/composition-api'
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
      const flickityOptions = reactive({
        imagesLoaded: false,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        adaptiveHeight: true,
        dots: true
        
      })
      const slider = computed(() => {
        let array = []
        props?.options?.imageOrVideo.data.forEach(element => {
          let url = $axios.defaults.baseURL + element.attributes.url
          let item = {
            type: element.attributes.ext === '.mp4' || element.attributes.ext === '.webm' || element.attributes.ext === '.MP4' || element.attributes.ext === '.WEBM' ? 'video' : 'image',
            url
          }
          array.push(item)
        })
        return array
      })
      const changed = () => {
        const slider = document.querySelector('.carousel')
        const slides = slider.querySelectorAll('.carousel-videl')
        if (slides.length) {
          slides.forEach((item) => {
            item.pause()
          }) 
        }
      }
      return {
        slider,
        flickityOptions,
        changed
      }
    }
  }