import { useRouter, computed, useContext } from '@nuxtjs/composition-api'
export default {
  name: 'project',
  props: {
    case: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, ctx) {
    const { $axios } = useContext()
    const router = useRouter()
    const openProject = () => {
      router.push({
        path: `/projects/${props.case?.id}`
      })
    }
    const caseInfo = computed(() => {
      if (props?.case?.attributes?.cases) {
        return props?.case?.attributes?.cases?.data[0]
      } else {
        return props?.case?.attributes
      }
    })
    const author = computed(() => {
      return caseInfo.value?.author?.data?.attributes
    })
    const section = computed(() => {
      return caseInfo.value?.section?.data?.attributes?.name
    })
    const date = computed(() => {
      const dateSplit = caseInfo.value?.date.split('-')
      return `${dateSplit[2]}.${dateSplit[1]}.${dateSplit[0]}`
    })
    const wrap = computed(() => {
      return $axios.defaults.baseURL + caseInfo.value?.wrap?.data?.attributes?.url
    })
    return {
      openProject,
      caseInfo,
      author,
      section,
      date,
      wrap
    }
  }
}