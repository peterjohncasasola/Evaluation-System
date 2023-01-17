import DepartmentService from "../services/DepartmentService.js";

const state = {
  departments: [],
  department: {},
  errors: null,
}

const getters = {
  getDepartmentById: state => id => {
    return state.department.find(department => department.id === id);
  },

  departments: state => state.departments,
  department: state => state.department,
  errors: state => state.errors
}

const mutations = {
  ADD_DEPARTMENT(state, data) {
    state.departments.unshift(data);
  },
  SET_DEPARTMENTS(state, data) {
    state.departments = data;
  },
  SET_DEPARTMENT(state, data) {
    state.department = data;
  },
  DELETE_DEPARTMENT(state, data) {
    let index = state.departments.findIndex(department => department.id === data.id);
    state.departments.splice(index, 1);
  },
  UPDATE_DEPARTMENT(state, data) {
    let index = state.departments.findIndex(department => department.id === data.id);
    let department = state.departments[index];
    Object.assign(department, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createDepartment({
    commit,
    dispatch
  }, payload) {
    try {
      let response = await DepartmentService.postDepartment(payload);
      commit('ADD_DEPARTMENT', response.data.data);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchDepartments({
    commit
  }) {

    DepartmentService.getDepartments().then(response => {
      commit('SET_DEPARTMENTS', response.data.data)
    }).catch(errors => {
      return errors.response.data

    })
  },

  fetchDepartment({
    commit
  }, id) {

    let department = getters.getDepartmentById(id);

    if (department) {
      commit('SET_DEPARTMENT', department)
    } else {
      DepartmentService.getDepartment(id).then(response => {
        commit('SET_DEPARTMENT', response.data)
      }).catch(errors => {
        return errors.response.data
      })
    }
  },

  async deleteDepartment({
    commit
  }, payload) {
    try {
      await DepartmentService.deleteDepartment(payload.id);
      commit('DELETE_DEPARTMENT', payload)

    } catch (errors) {
      return errors.response.data;
    }
  },

  async updateDepartment({
    commit
  }, payload) {
    try {
      await DepartmentService.putDepartment(payload);
      commit('UPDATE_DEPARTMENT', payload);
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
