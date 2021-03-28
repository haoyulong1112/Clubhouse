import request from '@/utils/request'
const requestDomain = envConfig.requestDomain

// 获取用户列表
export const setServicePhone = data => {
    return request({
        url: `${requestDomain}/club-room/admin/setServicePhone`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
