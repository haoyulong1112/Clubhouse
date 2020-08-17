import request from '@/src/plugin/axios/index'

export function getIndexMsg(data) {
  return request ({
    url: '',
    method: 'get',
    params: data
  })
}

export function getProduct(data) {
  return request ({
    url: '',
    method: 'post',
    data: data
  })
}