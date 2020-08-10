import axios from 'axios'
import requestDomain from '@/static/config/requestDomin'
// 可以配置一些基本参数
const request = axios.create({
  baseURL: 'http://localhost:8080'
})

export default request
