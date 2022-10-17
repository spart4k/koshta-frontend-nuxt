export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async getAboutPage ({ commit }, params) {
    try {
      const data = await this.$axios.get('/about-page', params)
      console.log(data.data)
      // commit('setBasket', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  },
}

export const getter = {}
