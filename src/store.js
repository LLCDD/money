import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    uid: 0,
    name: '',
    avatar: '',
    // 底部的导航栏
    footstatus: false,
    // 头部的导航标签
    headerStatus: false,
    header: "雷特币",
    // 用户登录的信息
    account: "",   // 账号
    person: "", // 推荐人
    money: "", // 余额
    wallet: "", // 钱包地址

  },
  mutations: {
    setUser(state, payload) {
      let { uid, username, avatar } = payload
      state.uid = uid
      state.username = username
      state.avatar = avatar

      localStorage.setItem('uid', uid + '')
      localStorage.setItem('username', username)
      localStorage.setItem('avatar', avatar)
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setAvatar(state, avatar) {
      state.avatar = avatar
      localStorage.setItem('avatar', avatar)
    },

    // ------------------------
    tabBar(a, b) {
      a.footstatus = b
    },
    headerStatus(a, b) {
      a.headerStatus = b
    },
    size(a, b) {
      a.header = b
    },
    // -------------------------- 账户登录的信息
    account(a, b) {
      a.account = b
    },
    person(a, b) {
      a.person = b
    },
    money(a, b) {
      a.money = b
    },
    wallet(a, b) {
      a.wallet = b
    }
    // ------------------------

  },
  actions: {
    login({ commit }, payload) {
      let { token, id, username, avatar } = payload

      commit('setToken', token)
      commit('setUser', { uid: id, username, avatar })
    }
  }
})
