import { useAsync, useContext, computed } from '@nuxtjs/composition-api'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'contacts',
  props: {
  },
  components: { VueSlickCarousel },
  setup(props,_) {
    const { store, $axios } = useContext()
    const contactsInfo = useAsync(async() => await store.dispatch('contacts/getContacts'))
    const slider = computed(() => {
      let array = []
      const photos = contactsInfo?.value?.attributes?.photos?.data
      if (photos) {
        photos.forEach(element => {
          let url = $axios.defaults.baseURL + element?.attributes?.url
          array.push(url)
        })
        return array
      }
    })
    return {
      contactsInfo,
      slider
    }
  }
}