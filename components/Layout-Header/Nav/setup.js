
import { ref, useContext, defineComponent, useFetch, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Nav',
  setup() {
    const { store } = useContext()
    const router = useRouter()
    const isOpenProjectsDrop = ref(false)
    const isShowWrap = ref(false)
    const sections = ref([])
    const openProjectsDrop = () => {
      isOpenProjectsDrop.value = !isOpenProjectsDrop.value
    }
    const openSection = (id) => {
      router.push({
        path: `/sections/${id}`
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
    const fetchData = async () => {
      const data  = await store.dispatch('sections/getAllSections')
      return data
    }

    const { fetch } = useFetch(async () => {
      try {
        const response = await fetchData()
        sections.value = response
      } catch (e) {
        console.log(e)
      }
    })
    fetch()
    return {
      isOpenProjectsDrop,
      openProjectsDrop,
      openSection,
      openNav,
      closeNav,
      isShowWrap,
      openAbout,
      openContacts,
      sections
    }
  }
})