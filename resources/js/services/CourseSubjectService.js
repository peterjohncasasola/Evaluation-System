import apiClient from '../apiClient'

export default {

  getCoursesSubjects() {
    return apiClient.get('/courses-subjects')
  },

  getCourseSubject(id) {
    return apiClient.get(`/courses-subjects/${id}`)
  },

  postCourseSubject(courseSubject) {
    return apiClient.post('/courses-subjects', courseSubject)
  },

  deleteCourseSubject(id) {
    return apiClient.delete(`/courses-subjects/${id}`)
  },

  updateCourseSubject(data) {
    return apiClient.put(`/courses-subjects/${data.id}`, data)
  }
}
