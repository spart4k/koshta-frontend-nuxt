import { ref, onMounted, defineComponent, useFetch, useMeta, computed, useContext, useAsync } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IndexPage',
  components: {
  },
  head: {},
  setup(props, ctx) {
    const { store, $axios } = useContext()
    const mainVideo = ref(null) 
    const projects = ref(null)
    const example = ref(null)
    const footerInfo = ref([])
    const scrollTop = ref(0)
    const isTouchDisabled = ref(true)
    // const cases = ref([])
    // const mainInfo = ref([])
    const loading = ref(true)
    const mainInfo = useAsync(async() => await store.dispatch('mainpage/getMainPageInfo'))
    const cases = useAsync(async () => await store.dispatch('cases/getAllCases'))
    // const fetchData = async () => {
    //   const cases  = await store.dispatch('cases/getAllCases')
    //   const mainInfo = await store.dispatch('mainpage/getMainPageInfo')
    //   loading.value = true
    //   return {
    //     cases,
    //     mainInfo
    //   }
    // }

    // const { fetch, fetchState } = useFetch(async () => {
    //   try {
    //     const response = await fetchData()
    //     cases.value = response.cases
    //     mainInfo.value = response.mainInfo
    //   } catch (e) {
    //     console.log(e)
    //   }
    // })
    // fetch()
    const headerOptions = ref({
      title: "All projects",
      subtitle: "«I can't explain muself. I'm afraid. Sir», said Alice, because I am not myself, you see»"
    })
    const showButtonNext = ref(true)
    const fullpageOptions = ref({
      dir: 'v',
      duration: 500,
      disabled: false,
      beforeChange: function (currentSlideEl,currenIndex,nextIndex) {
        if (nextIndex === 1) {
          showButtonNext.value = true
          startMainVideo()
        }
        if (currenIndex === 1) {
          stopMainVideo()
          fullpageOptions.value.disabled = true
        }
        if (currenIndex === 2) {
          // fullpageOptions.value.setAutoScrolling = false
          // store.commit('layout/showInterface')
        }
        if (nextIndex === 2 ) {
          showButtonNext.value = false
          // store.commit('layout/hideInterface')
        }
      },
      afterChange: function (currentSlideEl, currentIndex) {
        if (currentIndex === 0 || currentIndex === 1) {
          isTouchDisabled.value = true
        }
        if (currentIndex === 2) {
          setOverflowBlock()
          setTimeout(() => {
            isTouchDisabled.value = false
          }, 0);
        }
      }
    })
    const mainVideoUrls = computed(() => {
      if (mainInfo?.value?.data?.attributes) {
        return {
          desktop: $axios.defaults.baseURL + mainInfo?.value?.data?.attributes?.video_desktop?.data?.attributes?.url,
          mobile: $axios.defaults.baseURL + mainInfo?.value?.data?.attributes?.video_mobile?.data?.attributes?.url
        }
      }
    })
    const setOverflowBlock = () => {
      const blockHeight = projects.value.scrollHeight - projects.value.offsetHeight; 
      manageStateFullpage()
      projects.value.onwheel = e => {
        manageStateFullpage()
        if (projects.value.scrollTop <= 0 || projects.value.scrollTop === blockHeight) {
          if (e.deltaY > 30 || e.deltaY < -30) {
            return
          }
          else {
            e.stopPropagation()
          }
        }
        else {        
          e.stopPropagation()
        }
      };
      projects.value.ontouchstart = e => {
        if (isTouchDisabled.value) {
          e.preventDefault()
          e.stopPropagation()
          return
        }
      };
      projects.value.ontouchmove = e => {
        scrollTop.value = projects.value.scrollTop
        if (projects.value.scrollTop <= 100) {
          store.commit('fullpage/changeState', false)
        } else {
          store.commit('fullpage/changeState', true)
          e.stopPropagation()
        }
      };
      projects.value.style.overflow = 'auto'
    }
    const manageStateFullpage = () => {
      if (projects.value.scrollTop === 0 || projects.value.scrollTop < 0) {
        store.commit('fullpage/changeState', false)
      }
      else {
        store.commit('fullpage/changeState', true)
      }
    }
    const startMainVideo = () => {
      if (mainVideoUrls.value.desktop && mainVideoUrls.value.mobile) mainVideo.value.$el.play() 
    }
    const stopMainVideo = () => {
      if (mainVideoUrls.value.desktop && mainVideoUrls.value.mobile) mainVideo.value.$el.pause()
    }
    useMeta(() => ({ 
      title: mainInfo?.value?.data?.attributes?.meta?.meta_data,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: mainInfo?.value?.data?.attributes?.meta?.meta_data
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: mainInfo?.value?.data?.attributes?.meta?.meta_description
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${$axios.defaults.baseURL}${mainInfo?.value?.data?.attributes?.meta?.meta_image?.data?.attributes?.url}`
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
          content: `${$axios.defaults.baseURL}${mainInfo?.value?.data?.attributes?.meta?.meta_image?.data?.attributes?.url}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: mainInfo?.value?.data?.attributes?.meta?.meta_description
        }
      ]
    }))
    onMounted(() => {
      loading.value = false
      iNoBounce.enable()
    })
    return {
      fullpageOptions,
      mainVideo,
      projects,
      setOverflowBlock,
      stopMainVideo,
      startMainVideo,
      headerOptions,
      example,
      cases,
      footerInfo,
      mainInfo,
      mainVideoUrls,
      loading,
      showButtonNext,
      isTouchDisabled,
      // fetchState
    }
  },
  methods: {
    nextSlide() {
      this.$refs.example.$fullpage.moveNext()
    }
  },
  watch: {
    disabledFullpage(newVal,oldVar) {
      if (newVal) {
        this.$refs.example.$fullpage.setDisabled(true);
      }
      else {
        this.$refs.example.$fullpage.setDisabled(false);
      }
    },
  },
  computed: {
    disabledFullpage() {
      return this.$store.state.fullpage.disabled
    }
  },
  mounted() {
    // this.resizeWindow()
    // console.log('mount')
    // this.$refs.example.$fullpage.$update();
  }
  
})