
import { ref, useContext, useRouter } from '@nuxtjs/composition-api'
export default {
  name: 'Nav',
  setup() {
    const { store } = useContext()
    const router = useRouter()
    const isOpenProjectsDrop = ref(false)
    const isShowWrap = ref(false)
    const openProjectsDrop = () => {
      isOpenProjectsDrop.value = !isOpenProjectsDrop.value
    }
    const openSection = () => {
      router.push({
        path: `/sections`
      })
      isOpenProjectsDrop.value = false
      if (isShowWrap) {
        closeNav()
      }
    }
    const openNav = () => {
      store.commit('layout/setBodyOverflow', false)
      isShowWrap.value = true
    }
    const closeNav = () => {
      store.commit('layout/setBodyOverflow', true)
      isShowWrap.value = false
    }
    const openAbout = () => { 
      router.push({
        path: `/about`
      })
      if (isShowWrap) {
        closeNav()
      }
    }
    const openContacts = () => {
      router.push({
        path: `/contacts`
      })
      if (isShowWrap) {
        closeNav()
      }
    }
    return {
      isOpenProjectsDrop,
      openProjectsDrop,
      openSection,
      openNav,
      closeNav,
      isShowWrap,
      openAbout,
      openContacts
    }
  }
}