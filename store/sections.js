export const state = () => ({
  sections: []
})

export const mutations = {
  setSections(state, data) {
    state.sections = data
  }
}

export const actions = {
  async getAllSections ({ commit }) {
    try {
      const { data } = await this.$axios.get('/api/sections?populate[0]=cases.wrap&populate[1]=cases.author')
      console.log(data.data)
      // commit('setSections', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  },
  async getSection ({ commit }, id) {
    try {
      const { data } = await this.$axios.get(`/api/sections/${id}?populate[0]=cases.wrap&populate[1]=cases.author&populate[2]=cases.section&populate[3]=meta.meta_image`)
      console.log('page')
      console.log(data.data)
      // commit('setSections', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  }
}

export const getter = {}
