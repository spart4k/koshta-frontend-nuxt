
import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'Nav',
  setup() {
    const isOpenProjectsDrop = ref(false)
    const openProjectsDrop = () => {
      isOpenProjectsDrop.value = !isOpenProjectsDrop.value
    }
    return {
      isOpenProjectsDrop,
      openProjectsDrop
    }
  }
}