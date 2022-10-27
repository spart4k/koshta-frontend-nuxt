import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'main-projects',
  props: {
    cases: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const headerOptions = ref({
      title: "All projects",
      subtitle: ""
    })
    return {
      headerOptions
    }
  }
}