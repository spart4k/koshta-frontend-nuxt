export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async getMainPageInfo ({ commit }) {
    try {
      const data = await this.$axios.get('https://koshta.c.roky.rocks/api/main-page?populate[0]=meta.meta_image&populate[1]=video_desktop&populate[2]=video_mobile')
      // commit('setBasket', data)
      return data.data
    } catch (e) {
      console.log(e)
    }
  }
}

export const getter = {}
