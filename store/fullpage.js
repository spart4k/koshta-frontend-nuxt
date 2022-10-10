export const state = () => ({
  disabled: false
})

export const mutations = {
  changeState(state, param) {
    state.disabled = param
    console.log(state.disabled)
  }
}

export const actions = {}

export const getter = {}
