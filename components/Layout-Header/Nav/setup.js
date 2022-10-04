
import { ref, useContext, useRouter } from '@nuxtjs/composition-api'
export default {
  name: 'Nav',
  setup() {
    const router = useRouter()
    console.log(router)
    const isOpenProjectsDrop = ref(false)
    const openProjectsDrop = () => {
      isOpenProjectsDrop.value = !isOpenProjectsDrop.value
    }
    const openSection = () => {
      router.push({
        path: `/sections`
      })
      isOpenProjectsDrop.value = false
    }
    return {
      isOpenProjectsDrop,
      openProjectsDrop,
      openSection
    }
  }
}