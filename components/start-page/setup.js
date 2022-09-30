import { ref, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'start-page',
  setup () {
    const center = ref(null)
    const options = ref({})
    // const centerOptions = computed(() => {
    //   const widthW = center?.value?.offsetWidth;
    //   
      
    // })
    onMounted(() => {
      let block = center?.value
      const { width, height, x, y } = block?.getBoundingClientRect();
      options.value = {
        width, height, x, y
      }
    })
    return {
      center,
      options
      // centerOptions
    }
  }
}