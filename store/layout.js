export const state = () => ({
  isShow: true
})

export const mutations = {
  hideInterface(state) {
    console.log('hide')
    state.isShow = false
  },
  showInterface(state) {
    state.isShow = true
  }
}

export const actions = {}

export const getter = {}
