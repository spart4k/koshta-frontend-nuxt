export const state = () => ({
  isShow: true,
  isShowProvide: false,
  isShowObs: true,
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
  hideInterfaceObs(state) {
    state.isShowObs = false
  },
  showInterfaceObs(state) {
    state.isShowObs = true
  },
  showInterfaceProvide(state) {
    state.isShowProvide = true
  },
  hideInterfaceProvide(state) {
    state.isShowProvide = false
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
