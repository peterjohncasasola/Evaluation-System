import apiClient from '../apiClient'

export default {
  getUsers() {
    return apiClient.get('/api/users')
  },
  getUser(id) {
    return apiClient.get(`/api/users/${id}`)
  },
  postUser(user) {
    return apiClient.post('/api/users', user)
  },
  deleteUser(id) {
    return apiClient.delete(`/api/users/${id}`)
  },

  updateUser(user) {
    return apiClient.put(`/api/users/${user.id}`, user)
  }
}
