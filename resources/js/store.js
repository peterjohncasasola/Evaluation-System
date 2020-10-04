import Vue from 'vue'
import Vuex from 'vuex'

/* Stores */
import courses from './store/courses';
import students from './store/students'
import subjects from './store/subjects'
import notification from './store/notification'
import instructors from './store/instructors'
import users from './store/users'
import academicYears from './store/academicYears'
import courseSubject from './store/courseSubject'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    courses,
    students,
    subjects,
    notification,
    instructors,
    users,
    academicYears,
    courseSubject,
  },
  state: {
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* NavBar */
    isNavBarVisible: true,

    /* FooterBar */
    isFooterBarVisible: true,

    /* Aside */
    isAsideVisible: true,
    isAsideMobileExpanded: false
  },
  mutations: {
    /* A fit-them-all commit */
    basic(state, payload) {
      state[payload.key] = payload.value
    },

    /* User */
    user(state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },

    /* Aside Mobile */
    asideMobileStateToggle(state, payload = null) {
      const htmlClassName = 'has-aside-mobile-expanded'

      let isShow

      if (payload !== null) {
        isShow = payload
      } else {
        isShow = !state.isAsideMobileExpanded
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }

      state.isAsideMobileExpanded = isShow
    }
  },
  actions: {

  }
})
