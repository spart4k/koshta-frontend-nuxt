import { ref, defineComponent, useAsync, useFetch, useContext, onMounted, watch, computed } from '@nuxtjs/composition-api'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default defineComponent ({
  name: 'project-page',
  props: {
  },
  components: { VueSlickCarousel },
  setup(props,_) {
    const { store, route } = useContext()
    const caseInfo = ref({})
    const loading = ref(false)
    // const caseInfo = useAsync( async () => {
    //   const id = route.value.params.id
    //   const { data } = await store.dispatch('cases/getCase', id)
    //   console.log(id)
    //   console.log('mount')
    //   // caseInfo.value =  data.attributes
    //   return data.attributes
    // })
    const fetchData = async () => {
      const id = route.value.params.id
      const { data } = await store.dispatch('cases/getCase', id)
      return data.attributes
    }

   const { fetch } = useFetch(async () => {
      try {
        const response = await fetchData()
        caseInfo.value = response
        console.log(caseInfo.value)
        headerInfo.value.title = caseInfo?.value?.Title
      } catch (e) {
        console.log(e)
      }
    })
    fetch()
    const headerInfo = ref({
      title: '',
      subtitle: ''
    })
    const otherProjectsHeader = ref({
      title: 'Other projects'
    })
    console.log(caseInfo?.value)
    // loading.value = true
    const caseData = computed(() => {
      return caseInfo.value
    })
    watch(caseData, () => {
      console.log('change')
      if (caseData?.value) loading.value = false
      /* triggers on deep mutation to state */
    })
    console.log(caseInfo.value)
    onMounted(() => {
      console.log('mount')
      headerInfo.value.title = caseInfo?.value?.Title
      console.log(headerInfo.value.title)
      // if (headerInfo.value.title) loading.value = false 
    })
    return {
      headerInfo,
      otherProjectsHeader,
      caseInfo,
      caseData,
      loading
    }
  }
})