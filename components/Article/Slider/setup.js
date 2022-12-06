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
      // const flickityOptions = reactive({
      //   imagesLoaded: true,
      //   prevNextButtons: true,
      //   pageDots: true,
      //   wrapAround: true,
      //   adaptiveHeight: true,
      //   dots: true
        
      // })
      const optionsSlider = {
        adaptiveHeight: true,
        setGallerySize: false,
        imagesLoaded: true,
        pageDots: true,
        selectedAttraction: 0.3,
        friction: 0.8,
        on : {
          change: function( index ) {
            console.log( 'Slide changed to' + index );
            changed()
          }
        },
        arrowShape: 'M75.1413 96.1853C72.6629 98.6049 68.6448 98.6049 66.1664 96.1853L23.8587 54.881C21.3804 52.4614 21.3804 48.5386 23.8588 46.119L66.1664 4.81465C68.6448 2.39511 72.6629 2.39511 75.1413 4.81465C77.6196 7.23421 77.6196 11.1571 75.1413 13.5766L37.321 50.5L75.1413 87.4234C77.6196 89.8429 77.6196 93.7658 75.1413 96.1853Z'
      }
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
        const slider = document.querySelector('.flickity-slider')
        const slides = slider.querySelectorAll('video')
        console.log(slider)
        if (slides.length) {
          console.log(slides)
          slides.forEach((item) => {
            item.pause()
          }) 
        }
      }
      return {
        slider,
        // flickityOptions,
        changed,
        optionsSlider
      }
    }
  }