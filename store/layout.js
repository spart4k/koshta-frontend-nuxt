export const state = () => ({
  isShow: true,
  bodyOverflow: true,
  isShowNavWrap: false
})

export const mutations = {
  hideInterface(state) {
    state.isShow = false
  },
  showInterface(state) {
    state.isShow = true
  },
  setBodyOverflow(state, param) {
    if (param) {
      document.body.classList.remove('no-overflow')
    } else {
      document.body.classList.add('no-overflow')
    }
    state.bodyOverflow = param
  },
  showWrap(state, param) {
    state.isShowNavWrap = param
  }
}

export const actions = {}

export const getter = {}
