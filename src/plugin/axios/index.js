import axios from 'axios'
const requestDomain = envConfig.requestDomain
// 可以配置一些基本参数
const request = axios.create({
  baseURL: requestDomain,
  timeout: 10000,
})
export default request
