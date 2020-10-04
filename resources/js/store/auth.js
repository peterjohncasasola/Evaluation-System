const state = {
  user: {},
  token: localStorage.getItem('token') || null,
  isLoggedIn: !!localStorage.getItem('token'),

};

const mutations = {
  SET_USER: (state, data) => (state.user = data),
  SET_TOKEN: (state, data) => {
    localStorage.setItem('token', data);
    api.defaults.headers.common['Authorization'] = `Bearer ${data}`;
    state.token = data;
  },

};

const actions = {
  async login({
    commit,
    dispatch
  }, payload) {
    try {
      // const response = await api.post('api/login', payload);

      // const user = {
      //   userId: response.data.userId,
      //   username: response.data.username,
      //   fullName: response.data.fullName,
      //   usingDefaultPassword: response.data.usingDefaultPassword,
      //   departmentCode: response.data.departmentCode,
      //   department: response.data.department,
      // };

      // const token = response.data.token;  

      // commit('SET_USER', user);
      // commit('SET_TOKEN', token);


    } catch (error) {
      throw error;
    }
  },
};

const getters = {
  user: state => state.user,
  token: state => state.token,
  isLoggedIn: state => !!state.token,
};

export const auth = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
