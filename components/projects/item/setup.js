import { useRouter, computed } from '@nuxtjs/composition-api'
export default {
  name: 'project',
  props: {
    case: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, ctx) {
    const router = useRouter()
    const openProject = () => {
      router.push({
        path: `/projects/${props.case?.id}`
      })
    }
    const caseInfo = computed(() => {
      return props.case
    })
    return {
      openProject,
      caseInfo
    }
  }
}