import apiClient from '../apiClient'

export default {
  getInstructors() {
    return apiClient.get('/api/instructors')
  },
  getInstructor(id) {
    return apiClient.get(`/api/instructors/${id}`)
  },
  postInstructor(instructor) {
    return apiClient.post('/api/instructors', instructor)
  },
  deleteInstructor(id) {
    return apiClient.delete(`/api/instructors/${id}`)
  },

  updateInstructor(instructor) {
    return apiClient.put(`/api/instructors/${instructor.id}`, instructor)
  }
}
