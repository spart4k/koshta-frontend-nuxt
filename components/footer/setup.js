import { useContext, ref, useFetch, computed } from '@nuxtjs/composition-api'
  export default {
    name: 'footer-default',
    props: {
      // footerInfo: {
      //   type: Object,
      //   default: () => {}
      // }
    },
    setup() {
      const { store } = useContext()
      const footerInfo = ref({})
      const fetchData = async () => {
        const data  = await store.dispatch('contacts/getContacts')
        return data
      }
  
      const { fetch } = useFetch(async () => {
        try {
          const response = await fetchData()
          footerInfo.value = response.attributes
        } catch (e) {
          console.log(e)
        }
      })
      fetch()
      const officeses = computed(() => {
        // return footerInfo?.value?.Office
      })
      const noClickedMatter = computed(() => {
        return store.state?.matter?.matterClicked
      })
      return {
        noClickedMatter,
        footerInfo,
        officeses
      }
    }
  }