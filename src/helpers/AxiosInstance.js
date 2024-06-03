import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://quizee-backen-3.onrender.com'; 

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.withCredentials = true

export default axiosInstance
