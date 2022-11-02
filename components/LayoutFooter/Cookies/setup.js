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
      if (isMobile.value) {
        handler()
      }
    }
    const isShowInterface = computed(() => {
      return store.state?.layout?.isShow
    })
    const isMobile = computed(() => {
      if (process.client) {
        return window.innerWidth < 768
      }
    })
    const handler = () => {
      if (DeviceMotionEvent) {
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
          // Handle iOS 13+ devices.
          DeviceMotionEvent.requestPermission()
        } else if (typeof DeviceOrientationEvent.requestPermission === 'function') {
          // Handle iOS 13+ devices.
          DeviceOrientationEvent.requestPermission()
        } else {
          return
        }
      }
    }
    return {
      isShow,
      close,
      isShowInterface,
      transition,
      handler,
      isMobile
    }
  }
}