// 基于axios的网络请求模块
import axios from 'axios'
// myAxios请求时存在字符串拼接baseURL + rul
const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})
// 导出
export default myAxios
