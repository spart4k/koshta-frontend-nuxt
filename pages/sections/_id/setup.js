import { ref, useAsync, useFetch, defineComponent, computed, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'section-detail',
  setup() {
    const { store, route } = useContext()
    // const sectionInfo = ({})
    const sectionInfo = useAsync( async () => {
      const id = route.value.params.id
      console.log(id)
      const { attributes } = await store.dispatch('sections/getSection', id)
      console.log('mount')
      // caseInfo.value =  data.attributes
      return attributes.cases.data
    })
    // const fetchData = async () => {
    //   const id = route.value.params.id
    //   const { attributes } = await store.dispatch('sections/getSection', id)
    //   console.log(id)
    //   console.log('mount')
    //   // caseInfo.value =  data.attributes
    //   return attributes
    // }

    // const { fetch } = useFetch(async () => {
    //   try {
    //     const response = await fetchData()
    //     sectionInfo.value = response
    //   } catch (e) {
    //     console.log(e)
    //   }
    // })
    // fetch()
    const description = computed(() => {
      return JSON.parse(sectionInfo?.value?.description)
    })
    const headerOptions = computed(() => {
      return {
        title: sectionInfo?.value?.name,
        subtitle: sectionInfo?.value?.name,
      }
    })
    return {
      headerOptions,
      sectionInfo,
      description
    }
  }
})