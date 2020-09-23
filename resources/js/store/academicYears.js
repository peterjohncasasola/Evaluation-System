import AcademicYearService from '../services/AcademicYearService.js'

const state = {
  academicYears: [],
  student: {},
  errors: null,
}

const getters = {
  getUserById: state => id => {
    return state.users.find(user => user.id === id);
  },
  academicYears: state => state.academicYears,
  user: state => state.user,
  errors: state => state.errors
}

const mutations = {
  ADD_USER(state, data) {
    state.users.unshift(data);
  },
  SET_ACADEMIC_YEARS(state, data) {
    state.academicYears = data;
  },
  SET_USER(state,
    data) {
    state.user = data;
  },
  DELETE_USER(state, data) {
    let index = state.users.findIndex(user => user.id === data.id);
    state.users.splice(index, 1);
  },
  UPDATE_USER(state, data) {
    let index = state.users.findIndex(user => user.id === data.id);
    let user = state.users[index];
    Object.assign(user, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createUser({
    commit,
    dispatch
  }, payload) {
    try {
      await UserService.postUser(payload);
      commit('ADD_USER', payload);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchAcademicYears({
    commit
  }) {

    AcademicYearService.getYears().then(response => {
      commit('SET_ACADEMIC_YEARS', response.data.data)
    }).catch(error => {

    })
  },

  async fetchUser({
    commit
  }, id) {

    let user = getters.getUserById(id);

    if (user) {
      commit('SET_USER', user)
    } else {
      await UserService.getUser(id).then(response => {
        commit('SET_USER', response.data)
      }).catch(error => {
        return error.response.data;
      })
    }
  },

  deleteUser({
    commit
  }, payload) {
    try {
      UserService.deleteUser(payload.id);
      commit('DELETE_USER', payload)

    } catch (error) {
      return error.response.data;
    }
  },

  async updateUser({
    commit
  }, payload) {
    try {
      await UserService.updateUser(payload);
      commit('UPDATE_USER', payload);
    } catch (error) {
      return error.response.data
    }
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
