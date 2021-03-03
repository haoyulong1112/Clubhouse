import axiosRequest from '@/utils/axiosnew'
export function getIndexMsg(data) {
  return axiosRequest ({
    url: '/pet-api/invite/activityIsOpen',
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
