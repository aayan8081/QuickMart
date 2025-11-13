import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 8000,
})

export const getProducts = async (params = {}) => {
  const { data } = await apiClient.get('/products', { params })
  return data.data || []
}

export const getCategories = async () => {
  const { data } = await apiClient.get('/categories')
  return data.data || []
}

export const getHighlights = async () => {
  const { data } = await apiClient.get('/content')
  return data.data || {}
}

export const createOrder = async (payload) => {
  const { data } = await apiClient.post('/orders', payload)
  return data
}

export default apiClient

