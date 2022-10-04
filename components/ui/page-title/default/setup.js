import { } from '@nuxtjs/composition-api'
export default {
  name: 'page-title',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  setup(props,_) {
    console.log(props)
    return {
      
    }
  }
}