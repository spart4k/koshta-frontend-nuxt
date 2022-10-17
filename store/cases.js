export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async getAllCases ({ commit }) {
    try {
      const data = await this.$axios.get('/cases')
      // commit('setBasket', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  },
  async getCase ({ commit }, id) {
    try {
      const data = await this.$axios.get(`/cases/${id}`)
      // commit('setBasket', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  },
}

export const getter = {}
