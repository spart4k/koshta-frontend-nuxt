export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async getAllCases ({ commit }) {
    try {
      const data = await this.$axios.get('/api/cases?populate[author]=*&populate[section]=*&populate[wrap]=*')
      // commit('setBasket', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  },
  async getCase ({ commit }, id) {
    try {
      const data = await this.$axios.get(`/api/cases/${id}?populate[slider_or_text][populate]=%2A&populate[author]=*&populate[section]=*&populate[wrap]=*&populate[meta]=meta.meta_image`)
      // commit('setBasket', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  },
}

export const getter = {}
