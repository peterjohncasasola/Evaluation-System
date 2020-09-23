import apiClient from '../apiClient'

export default {
  getStudents() {
    return apiClient.get('/api/students')
  },
  getStudent(id) {
    return apiClient.get(`/api/students/${id}`)
  },
  postStudent(course) {
    return apiClient.post('/api/students', course)
  },
  deleteStudent(id) {
    return apiClient.delete(`/api/students/${id}`)
  },

  updateStudent(student) {
    return apiClient.put(`/api/students/${student.id}`, student)
  }
}
