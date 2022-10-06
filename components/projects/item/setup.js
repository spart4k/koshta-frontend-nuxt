import { ref, useRouter } from '@nuxtjs/composition-api'
export default {
  name: 'projects-item',
  setup() {
    const router = useRouter()
    const openProject = () => {
      router.push({
        path: `/projects`
      })
    }
    return {
      openProject
    }
  }
}