import request from '@/utils/request'
const requestDomain = envConfig.requestDomain

// 保存客服信息
export const setServicePhone = data => {
    return request({
        url: `${requestDomain}/club-room/admin/setServicePhone`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
// 获取客服信息
export const getServicePhone = data => {
    return request({
        url: `${requestDomain}/club-room/admin/getServicePhone`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
