import request from '@/utils/request'
const requestDomain = envConfig.requestDomain
console.log(requestDomain);

// 获取用户列表
export const getUserList = data => {
    return request({
        url: `${requestDomain}/club-room/admin/userList`,
        data: data
    })
}
// 封禁用户
export const updateUserStatus = data => {
    return request({
        url: `${requestDomain}/club-room/admin/updateUserStatus`,
        data: data
    })
}
