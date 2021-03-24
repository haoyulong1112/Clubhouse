export default {
  namespaced: true,
  state: {
    // 客服电话
    phone: ''
  },
  mutations: {
    updatePhone (state, phone) {
      state.phone = phone
    }
  }
}
