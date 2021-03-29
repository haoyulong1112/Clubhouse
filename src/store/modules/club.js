export default {
  namespaced: true,
  state: {
    currentClubdata: {}
  },
  mutations: {
    setClubdata (state, currentClubdata) {
      state.currentClubdata = currentClubdata
    }
  }
}
