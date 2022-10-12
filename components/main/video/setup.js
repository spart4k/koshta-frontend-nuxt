import { computed, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'main-video',
  props: {
    setAutoplay: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const isMobile = computed(() => {
      if (process.client) {
        return window.innerWidth < 768
      }
    })
    onMounted(() => {
      console.log(isMobile.value)
    })
    return {
      isMobile
    }
  }
}