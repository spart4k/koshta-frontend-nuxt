import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'cookies',
  setup() {
    const isShow = ref(true)
    const close = () => {
      isShow.value = false
    }
    return {
      isShow,
      close
    }
  }
}