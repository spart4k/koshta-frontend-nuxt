import { ref, computed, useContext } from '@nuxtjs/composition-api'
export default {
  name: 'cookies',
  setup() {
    const { store } = useContext()
    const isShow = ref(true)
    const transition = ref('fade')
    const close = () => {
      transition.value = 'expand' 
      isShow.value = false
    }
    const isShowInterface = computed(() => {
      return store.state?.layout?.isShow
    })
    return {
      isShow,
      close,
      isShowInterface,
      transition
    }
  }
}