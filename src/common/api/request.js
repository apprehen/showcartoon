// 对axios就行二次封装
/* eslint-disable */ 
import { Indicator } from 'mint-ui'
import axios from 'axios'
export default {
  common: {
    method : 'GET',
    data: {},
    params: {},
    baseURL: 'http://localhost:3000',
  },
  $axios (options = {}) {
    options.method = options.method || this.common.method
    options.data = options.data || this.common.data
    options.params = options.params || this.common.params
    options.baseURL = options.baseURL || this.common.baseURL
    // 请求前显示加载中
    Indicator.open('加载中...')
    return axios(options).then(res => {
      let data = res.data.data
      return new Promise((res,rej) => {
        if (!data) return rej()
        // 成功结束关闭加载
        setTimeout(() => {
          Indicator.close()
        }, 500)
        res(data)
      })
    })
  }
}