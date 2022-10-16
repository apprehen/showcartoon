// 封装的是具体的接口方法，每个方法负责一个url地址
import request from '@/utils/request'

export const registerApi = () => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'youyima',
      password: '111111',
      repassword: '111111'
    }
  })
}
