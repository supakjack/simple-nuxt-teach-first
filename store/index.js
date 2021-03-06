import todos from './todos/index'

export const state = () => ({
  counter: 0
})

export const mutations = {
  setCounter(state, counter) {
    state.counter = counter
  }
}

export const actions = {
  increment(context) {
    context.commit('setCounter', context.state.counter + 1)
  }
}

export const getters = {
  getOne(state) {
    return state.counter + 1
  }
}

export const modules = {
  todos
}
