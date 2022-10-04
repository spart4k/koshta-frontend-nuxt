import { useContext, computed } from '@nuxtjs/composition-api'
  export default {
    name: 'layout-default',
    setup() {
      const { store } = useContext()
      const noClickedMatter = computed(() => {
        return store.state?.matter?.matterClicked
      })
      return {
        noClickedMatter
      }
    }
  }