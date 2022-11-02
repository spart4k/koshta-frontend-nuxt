import { useAsync, ref, useContext, useMeta, defineComponent, useFetch, computed, onMounted } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'contacts-page',
  props: {
  },
  components: { },
  head: {},
  setup(props,_) {
    const { store, $axios } = useContext()
    const contactsInfo = useAsync(async() => await store.dispatch('contacts/getContacts'))
    // const { fetch, fetchState } = useFetch(async () => {
    //   try {
    //     const response = await fetchData()
    //     contactsInfo.value = response
    //   } catch (e) {
    //     console.log(e)
    //   }
    // })
    // fetch()
    const slider = computed(() => {
      let array = []
      const photos = contactsInfo?.value?.attributes?.photos?.data
      if (photos) {
        photos.forEach(element => {
          let url = $axios.defaults.baseURL + element?.attributes?.url
          array.push(url)
        })
        return array
      }
    })
    useMeta(() => ({ 
      title: contactsInfo?.value?.attributes?.meta?.meta_data,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: contactsInfo?.value?.attributes?.meta?.meta_data
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: contactsInfo?.value?.attributes?.meta?.meta_description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${$axios.defaults.baseURL}${contactsInfo?.value?.attributes?.meta?.meta_image?.data?.attributes?.url}`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          property: 'twitter:card',
          content: `summary_large_image`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          property: 'twitter:image',
          content: `${$axios.defaults.baseURL}${contactsInfo?.value?.attributes?.meta?.meta_image?.data?.attributes?.url}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: contactsInfo?.value?.attributes?.meta?.meta_description
        }
      ]
    }))
    console.log(slider.value)
    const flickityOptions = ref({
      initialIndex: 3,
      prevNextButtons: true,
      pageDots: true,
      wrapAround: true
      // draggable: true
      // adaptiveHeight: true
    })

    onMounted(() => {
      iNoBounce.disable()
    })

    return {
      contactsInfo,
      slider,
      flickityOptions
      // fetchState
    }
  }
})