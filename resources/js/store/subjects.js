import SubjectService from '../services/SubjectService.js'

const state = {
  subjects: [],
  subject: {},
  errors: null,
}

const getters = {
  getBySubjectId: state => id => {
    return state.subjects.find(subject => subject.id === id);
  },
  subjects: state => state.subjects,
  subject: state => state.subject,
  errors: state => state.errors
}

const mutations = {
  ADD_SUBJECT(state, data) {
    state.subjects.unshift(data);
  },
  SET_SUBJECTS(state, data) {
    state.subjects = data;
  },
  SET_SUBJECT(state,
    data) {
    state.subject = data;
  },
  DELETE_SUBJECT(state, data) {
    let index = state.subjects.findIndex(subject => subject.id === data.id);
    state.subjects.splice(index, 1);
  },
  UPDATE_SUBJECT(state, data) {
    let index = state.subjects.findIndex(subject => subject.id === data.id);
    let subject = state.subjects[index];
    Object.assign(subject, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createSubject({
    commit,
    dispatch
  }, payload) {
    try {
      await SubjectService.postSubject(payload);
      commit('ADD_SUBJECT', payload);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchSubjects({
    commit
  }) {

    SubjectService.getSubjects().then(response => {
      commit('SET_SUBJECTS', response.data.data)
    }).catch(error => {

    })
  },

  async fetchSubject({
    commit
  }, id) {

    let subject = getters.getBySubjectId(id);

    if (subject) {
      commit('SET_SUBJECT', subject)
    } else {
      await SubjectService.getSubject(id).then(response => {
        commit('SET_SUBJECT', response.data)
      }).catch(error => {
        return error.response.data;
      })
    }
  },

  deleteSubject({
    commit
  }, payload) {
    try {
      SubjectService.deleteSubject(payload.id);
      commit('DELETE_SUBJECT', payload)

    } catch (error) {
      return error.response.data;
    }
  },

  async updateSubject({
    commit
  }, payload) {
    try {
      await SubjectService.updateSubject(payload);
      commit('UPDATE_SUBJECT', payload);
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
