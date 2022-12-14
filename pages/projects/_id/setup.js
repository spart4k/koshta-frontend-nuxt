import { ref, defineComponent, useAsync, useMeta, useFetch, useContext, onMounted, watch, computed } from '@nuxtjs/composition-api'
// import Flickity from 'vue-flickity';
export default defineComponent ({
  name: 'project-page',
  props: {
  },
  components: { },
  head: {},
  setup(props,_) {
    const { store, route, $axios } = useContext()
    const caseInfo = ref({})
    const loading = ref(false)
    const headerInfo = ref({})
    const cases = ref([])
    const flickityOptions = ref({
      prevNextButtons: true,
      pageDots: true,
      wrapAround: true
      // draggable: true
      // adaptiveHeight: true
    })
    // const cases = useAsync( async () => await store.dispatch('cases/getAllCases'))
    const caseInfoMeta = useAsync( async () => {
      const id = route.value.params.id
      const { data } = await store.dispatch('cases/getCase', id)
      return data.attributes
    })
    const fetchData = async () => {
      const id = route.value.params.id
      const { data } = await store.dispatch('cases/getCase', id)
      const allCase = await store.dispatch('cases/getAllCases')
      return {
        case: data.attributes,
        allCase: allCase
      }
    }

    const { fetch, fetchState } = useFetch(async () => {
      try {
        const id = route.value.params.id
        const { data } = await store.dispatch('cases/getCase', id)
        const allCase = await store.dispatch('cases/getAllCases')
        // return {
        //   case: data.attributes,
        //   allCase: allCase
        // }
        
        // const response = await fetchData()
        caseInfo.value = data.attributes
        cases.value = allCase
        const dateSplit = caseInfo.value?.date?.split('-')
        let newDate = ''
        if (dateSplit) {
          newDate = `${dateSplit[2]}.${dateSplit[1]}.${dateSplit[0]}`
        }
        headerInfo.value = {
          title: caseInfo?.value?.title,
          subtitle: caseInfo?.value?.subtitle,
          author: caseInfo?.value?.author?.data?.attributes?.name,
          job: caseInfo?.value?.author?.data?.attributes?.job,
          section: caseInfo?.value?.section?.data?.attributes?.name,
          date: newDate
        }
      } catch (e) {
        console.log(e)
      }
    })
    fetch()
    const allCaseList = computed(() => {
      return cases?.value?.data?.filter((item) => item.id !== +route.value.params.id)
    })
    // const headerInfo = ref({
    //   author: '',
    //   job: '',
    //   section: '',
    //   date: ''
    // })
    const otherProjectsHeader = ref({
      title: 'Other projects'
    })
    // loading.value = true
    const caseData = computed(() => {
      return []
    })
    watch(caseData, () => {
      if (caseData?.value) loading.value = false
      /* triggers on deep mutation to state */
    })
    const wrap = computed(() => {
      return $axios.defaults.baseURL + caseInfo.value?.wrap?.data?.attributes?.url
    })
    // const slider = computed(() => {
    //   const component = caseInfo?.value?.slider_or_text?.find((element) => element.__component === 'article.slider')
    //   let array = []
    //   if (component) {
    //     component.images.data.forEach(element => {
    //       let url = $axios.defaults.baseURL + element.attributes.url
    //       array.push(url)
    //     })
    //     return array
    //   }
    // })
    // const richText = computed(() => {
    //   const component = caseInfo?.value?.slider_or_text?.find((element) => element.__component === 'article.text')
    //   if (component) {
    //     const text = JSON.parse(component.text)
    //     return text.blocks
    //   }
    // })
    // const mainImage = computed(() => {
    //   const component = caseInfo?.value?.slider_or_text?.find((element) => element.__component === 'article.image')
    //   if (component) {
    //     const url = $axios.defaults.baseURL + component.image?.data?.attributes?.url
    //     return url
    //   }
    // })
    // const mainVideo = computed(() => {
    //   const component = caseInfo?.value?.slider_or_text?.find((element) => element.__component === 'article.video')
    //   if (component) {
    //     const url = $axios.defaults.baseURL + component.video?.data?.attributes?.url
    //     return url
    //   }
    // })
    // const mainVideoPoster = computed(() => {
    //   const component = caseInfo?.value?.slider_or_text?.find((element) => element.__component === 'article.video')
    //   if (component) {
    //     const url = $axios.defaults.baseURL + component.poster?.data?.attributes?.url
    //     return url
    //   }
    // })
    const orderList = computed(() => {
      const component = caseInfo?.value?.slider_or_text
      if (component) {
        var richText = component?.find((element) => element?.__component === 'article.text')
        var mainImage = component?.find((element) => element?.__component === 'article.image')
        var slider = component?.find((element) => element?.__component === 'article.slider')
        var video = component?.find((element) => element?.__component === 'article.video')
        return {
          text: richText ? component.indexOf(richText)+1 : null,
          image: mainImage ? component.indexOf(mainImage)+1 : null,
          slider: slider ? component.indexOf(slider)+1 : null,
          video: video ? component.indexOf(video)+1 : null
        }
      }
    })
    const getComponentName = (name) => {
      let result = ''
      switch (name) {
        case 'article.image':
          result = 'article-image'
          break;
        case 'article.video':
          result = 'article-video'
          break;
        case 'article.slider':
          result = 'article-slider'
          break;
        case 'article.text':
          result = 'article-text'
          break;
      }
      return result
    }
    onMounted(() => {
      iNoBounce.disable()
    })
    useMeta(() => ({ 
      title: caseInfoMeta?.value?.meta?.meta_data,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: caseInfoMeta?.value?.meta?.meta_data
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: caseInfoMeta?.value?.meta?.meta_description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${$axios.defaults.baseURL}${caseInfoMeta?.value?.meta?.meta_image?.data?.attributes?.url}`
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
          content: `${$axios.defaults.baseURL}${caseInfoMeta?.value?.meta?.meta_image?.data?.attributes?.url}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: caseInfoMeta?.value?.meta?.meta_description
        }
      ]
    }))
    return {
      headerInfo,
      otherProjectsHeader,
      caseInfo,
      caseData,
      loading,
      wrap,
      // slider,
      // richText,
      // mainImage,
      orderList,
      cases,
      fetchState,
      caseInfoMeta,
      allCaseList,
      // mainVideo,
      flickityOptions,
      // mainVideoPoster,
      getComponentName
    }
  }
})