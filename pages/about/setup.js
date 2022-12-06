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
    const optionsSlider = {
      adaptiveHeight: true,
      // imagesLoaded: true,
      pageDots: true,
      selectedAttraction: 0.3,
      friction: 0.8,
      on : {
        change: function( index ) {
          console.log( 'Slide changed to' + index );
          changed()
        }
      },
      arrowShape: 'M75.1413 96.1853C72.6629 98.6049 68.6448 98.6049 66.1664 96.1853L23.8587 54.881C21.3804 52.4614 21.3804 48.5386 23.8588 46.119L66.1664 4.81465C68.6448 2.39511 72.6629 2.39511 75.1413 4.81465C77.6196 7.23421 77.6196 11.1571 75.1413 13.5766L37.321 50.5L75.1413 87.4234C77.6196 89.8429 77.6196 93.7658 75.1413 96.1853Z'
    }
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
      flickityOptions,
      optionsSlider
      // fetchState
    }
  }
})