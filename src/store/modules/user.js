export default {
  namespaced: true,
  state: {
    username: '',
    password: '',
    token: '',
    phone: '',
    userdetail: {},
    currentUserdata: {}
  },
  mutations: {
    updateUsername (state, username) {
      state.username = username
    },
    updatePassword (state, password) {
      state.password = password
    },
    updateToken (state, token) {
      state.token = token
    },
    updatePhone (state, phone) {
      state.phone = phone
    },
    updateUser (state, userdetail) {
      state.userdetail = userdetail
    },
    setCurrentdata (state, currentUserdata) {
      state.currentUserdata = currentUserdata
    }
  }
}
