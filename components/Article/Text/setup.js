import { computed } from '@nuxtjs/composition-api'
  export default {
    name: 'article-text',
    props: {
      // footerInfo: {
      //   type: Object,
      //   default: () => {}
      // }
      options: {
        type: Object,
        default: () => {}
      },
      order: {
        type: Number,
        default: null
      }
    },
    setup(props) {
      const richText = computed(() => {
        const text = JSON.parse(props?.options?.text)
        return text.blocks
      })
      return {
        richText
      }
    }
  }