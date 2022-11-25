import { computed } from '@nuxtjs/composition-api'
export default {
  name: 'projects',
  props: {
    cases: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const formatetCases = computed(() => {
      let newArray = []
      props.cases.forEach((item) => {
        let date = new Date(item.attributes.createdAt)
        item.attributes.formatedDate = date
        newArray.push(item)
      })
      newArray.sort(function(a, b){
        var dateA=new Date(a.attributes.formatedDate), dateB=new Date(b.attributes.formatedDate)
        return dateB-dateA //сортировка по возрастающей дате
      })
      return newArray
      
    })
    return {
      formatetCases
    }
  }
}