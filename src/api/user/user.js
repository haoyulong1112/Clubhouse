import request from '@/utils/request'
const requestDomain = envConfig.requestDomain
// 获取用户列表
export const getUserList = data => {
    return request({
        url: `${requestDomain}/club-room/admin/userList`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
// 封禁用户
export const updateUserStatus = data => {
    return request({
        url: `${requestDomain}/club-room/admin/updateUserStatus`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
// 获取用户详情
export const userDetail = data => {
    return request({
        url: `${requestDomain}/club-room/admin/userDetail`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
