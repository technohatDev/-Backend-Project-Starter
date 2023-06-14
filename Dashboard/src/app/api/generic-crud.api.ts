import api from '.'

const genericCrudApi = (model: string) => ({
  getAll: async (options?: URLSearchParams) => {
    const queries = new URLSearchParams(options).toString()

    try {
      const response = await api().get(`/api/${model}?${queries}`)
      return response.data
    } catch (error: any) {
      return error.response.data
    }
  },
  getOne: async (id: string) => {
    try {
      const response = await api().get(`/api/${model}/${id}`)
      return response.data
    } catch (error: any) {
      return error.response.data
    }
  },
  createOne: async (data: any) => {
    try {
      const response = await api().post(`/api/${model}`, data)
      return response.data
    } catch (error: any) {
      return error.response.data
    }
  },
  updateOne: async (id: string, data: any) => {
    try {
      const response = await api().put(`/api/${model}/${id}`, data)
      return response.data
    } catch (error: any) {
      return error.response.data
    }
  },
  deleteOne: async (id: string) => {
    try {
      const response = await api().delete(`/api/${model}/${id}`)
      return response.data
    } catch (error: any) {
      return error.response.data
    }
  },
})

export default genericCrudApi
