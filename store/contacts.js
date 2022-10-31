export const state = () => ({
  sections: []
})

export const mutations = {
  setSections(state, data) {
    state.sections = data
  }
}

export const actions = {
  async getContacts ({ commit }) {
    try {
      const { data } = await this.$axios.get('/api/contacts-page?populate[0]=meta.meta_image&populate[1]=photos&populate[2]=Office')
      // commit('setSections', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  }
}

export const getter = {}
