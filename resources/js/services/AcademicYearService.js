import apiClient from '../apiClient'

export default {
  getYears() {
    return apiClient.get('/api/academic-years')
  },
  getYear(id) {
    return apiClient.get(`/api/academic-years/${id}`)
  },
  postAY(ay) {
    return apiClient.post('/api/academic-years', ay)
  },
  deleteAY(id) {
    return apiClient.delete(`/api/academic-years/${id}`)
  },

  updateAY(ay) {
    return apiClient.put(`/api/academic-years/${ay.id}`, ay)
  }
}
