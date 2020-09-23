import apiClient from '../apiClient'

export default {
  getSubjects() {
    return apiClient.get('/api/subjects');
  },
  getSubject(id) {
    return apiClient.get(`/api/subjects/${id}`)
  },
  postSubject(subject) {
    return apiClient.post('/api/subjects', subject)
  },
  deleteSubject(id) {
    return apiClient.delete(`/api/subjects/${id}`)
  },

  updateSubject(subject) {
    return apiClient.put(`/api/subjects/${subject.id}`, subject)
  }
}
