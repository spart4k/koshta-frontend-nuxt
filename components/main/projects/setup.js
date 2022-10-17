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
      subtitle: "«I can't explain muself. I'm afraid. Sir», said Alice, because I am not myself, you see»"
    })
    return {
      headerOptions
    }
  }
}