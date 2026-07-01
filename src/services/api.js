import axios from 'axios'

const API = axios.create({ baseURL: '/api' })

// Har request mein token attach karo
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token')
  if (token) req.headers.Authorization = `Bearer ${token}`
  return req
})

// Auth
export const loginUser    = (data) => API.post('/auth/login', data)
export const registerUser = (data) => API.post('/auth/register', data)

// Projects
export const getProjects    = ()       => API.get('/projects')
export const getProject     = (id)     => API.get(`/projects/${id}`)
export const createProject  = (data)   => API.post('/projects', data)
export const updateProject  = (id, data) => API.put(`/projects/${id}`, data)
export const deleteProject  = (id)     => API.delete(`/projects/${id}`)

// Skills
export const getSkills    = ()       => API.get('/skills')
export const createSkill  = (data)   => API.post('/skills', data)
export const deleteSkill  = (id)     => API.delete(`/skills/${id}`)

// Contact
export const sendMessage    = (data) => API.post('/contact', data)
export const getMessages    = ()     => API.get('/contact')
export const deleteMessage  = (id)   => API.delete(`/contact/${id}`)

export default API