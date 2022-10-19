import { useContext } from '@nuxtjs/composition-api'
  export default {
    name: 'logotype',
    setup(props, ctx) {
      const { store } = useContext()
      const { emit } = ctx
      const emitClick = () => {
        emit('click')
        if (window.innerWidth <= 768) {
          store.commit('layout/showWrap', false)
        }
      }

      return {
        emitClick
      }
    }
  }