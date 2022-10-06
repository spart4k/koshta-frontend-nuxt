import { ref } from '@nuxtjs/composition-api'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'page-title',
  props: {
  },
  components: { VueSlickCarousel },
  setup(props,_) {
    const headerInfo = ref({
      title: 'S7 × Koshta × Charobai',
      subtitle: '– Promo stills'
    })
    const otherProjectsHeader = ref({
      title: 'Other projects'
    })
    return {
      headerInfo,
      otherProjectsHeader
    }
  }
}