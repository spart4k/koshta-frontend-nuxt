import { ref, useAsync, useFetch, useMeta, defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'section-detail',
  head: {},
  setup() {
    const { store, route } = useContext()
    const sectionInfo = ref({})
    const headerOptions = ref({
      title: '',
      subtitle: '',
    })
    const sectionInfoMeta = useAsync( async () => {
      const id = route.value.params.id
      console.log(id)
      const { attributes } = await store.dispatch('sections/getSection', id)
      console.log('mount')
      route.value.path
      // caseInfo.value =  data.attributes
      return attributes
    })
    const fetchData = async () => {
      const id = route.value.params.id
      console.log(id)
      const { attributes } = await store.dispatch('sections/getSection', id)
      return attributes
    }

    const { fetch, fetchState } = useFetch(async () => {
      try {
        const response = await fetchData()
        sectionInfo.value = response
        headerOptions.value = {
          title: sectionInfo?.value?.name,
          subtitle: sectionInfo?.value?.subtitle
        }
      } catch (e) {
        console.log(e)
      }
    })
    fetch()
    // const description = computed(() => {
    //   return JSON.parse(sectionInfo?.value?.description)
    // })
    // const sectionList = computed(() => {
    //   return sectionInfo?.value?.cases?.data
    // })
    
    // const headerOptions = computed(() => {
    //   return {
    //     title: 'sectionInfo?.value?.name',
    //     subtitle: 'sectionInfo?.value?.name',
    //   }
    // })
    useMeta(() => ({ 
      title: sectionInfoMeta?.value?.name
      // meta: [
      //   {
      //     hid: 'og:title',
      //     name: 'og:title',
      //     property: 'og:title',
      //     content: contactsInfo?.value?.attributes?.meta?.meta_data
      //   },
      //   {
      //     hid: 'og:description',
      //     name: 'og:description',
      //     property: 'og:description',
      //     content: contactsInfo?.value?.attributes?.meta?.meta_description
      //   },
      //   {
      //     hid: 'og:image',
      //     name: 'og:image',
      //     property: 'og:image',
      //     content: `${$axios.defaults.baseURL}${contactsInfo?.value?.attributes?.meta?.meta_image?.data?.attributes?.url}`
      //   },
      //   {
      //     hid: 'twitter:card',
      //     name: 'twitter:card',
      //     property: 'twitter:card',
      //     content: `summary_large_image`
      //   },
      //   {
      //     hid: 'twitter:image',
      //     name: 'twitter:image',
      //     property: 'twitter:image',
      //     content: `${$axios.defaults.baseURL}${contactsInfo?.value?.attributes?.meta?.meta_image?.data?.attributes?.url}`
      //   },
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     property: 'description',
      //     content: contactsInfo?.value?.attributes?.meta?.meta_description
      //   }
      // ]
    }))
    return {
      headerOptions,
      sectionInfo,
      fetchState,
      sectionInfoMeta
      // sectionList
      // description
    }
  }
})