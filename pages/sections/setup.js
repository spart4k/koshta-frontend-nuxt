import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'section-detail',
  setup() {
    const headerOptions = ref({
      title: "NFT & Metaverse",
      subtitle: "«I can't explain muself. I'm afraid. Sir», said Alice, because I am not myself, you see»"
    })
    console.log(headerOptions.value)
    return {
      headerOptions
    }
  }
}