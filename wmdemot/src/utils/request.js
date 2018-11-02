import axios from 'axios'
import { getToken } from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})
//  请求拦截器
// 'Authorization': 'Bearer ' + storage.get('token') || null
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = getToken() || null // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code === '401') {
      alert(401)
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
