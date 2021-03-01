import request from '@/plugin/axios/index'
export function getIndexMsg(data) {
  return request ({
    url: '/pet-api/invite/activityIsOpen',
    method: 'get',
    params: data
  })
}

// export function getProduct(data) {
//   return request ({
//     url: `${requestDomain}`,
//     method: 'post',
//     data: data
//   })
// }
