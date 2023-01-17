import apiClient from '../apiClient'
import { setQueryParams } from '../services/helper'

export default {
  getDepartments() {
    return apiClient.get('/departments')
  },
  getDepartment(id) {
    return apiClient.get(`/departments/${id}`)
  },
  postDepartment(department) {
    return apiClient.post('/departments', department)
  },
  deleteDepartment(id) {
    return apiClient.delete(`/departments/${id}`)
  },

  putDepartment(department) {
    return apiClient.put(`/departments/${department.id}`, department)
  }
}
