export default {
  namespaced: true,
  state: {
    // 客服电话
    phone: '',
    // 屏幕的宽
    screenWidth: 0
  },
  mutations: {
    updatePhone (state, phone) {
      state.phone = phone
    },
    updateScreenwidth (state, screenWidth) {
      state.screenWidth = screenWidth
    }
  }
}
