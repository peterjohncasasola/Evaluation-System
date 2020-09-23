import apiClient from '../apiClient'

export default {
  getCourses() {
    return apiClient.get('/api/courses')
  },
  getCourse(id) {
    return apiClient.get(`/api/courses/${id}`)
  },
  postCourse(course) {
    return apiClient.post('/api/courses', course)
  },
  deleteCourse(id) {
    return apiClient.delete(`/api/courses/${id}`)
  },

  putCourse(course) {
    return apiClient.put(`/api/courses/${course.id}`, course)
  }
}
