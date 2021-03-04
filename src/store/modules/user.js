export default {
  namespaced: true,
  state: {
    username: '',
    password: ''
  },
  mutations: {
    updateUsername (state, username) {
      state.username = username
    },
    updatePassword (state, password) {
      state.password = password
    }
  }
}
