import { } from '@nuxtjs/composition-api'
  export default {
    name: 'logotype',
    setup(props, ctx) {
      console.log(ctx)
      const { emit } = ctx
      const emitClick = () => {
        emit('click')
      }

      return {
        emitClick
      }
    }
  }