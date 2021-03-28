import request from '@/utils/request'
const requestDomain = envConfig.requestDomain

// 添加管理员
export const addAdmin = data => {
    return request({
        url: `${requestDomain}/club-room/admin/addAdmin`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
// 获取管理员列表  
export const adminList = data => {
    return request({
        url: `${requestDomain}/club-room/admin/adminList`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
// 更新管理员
export const updateAdmin = data => {
    return request({
        url: `${requestDomain}/club-room/admin/updateAdmin`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}

// 删除管理员
export const delAdmin = data => {
    return request({
        url: `${requestDomain}/club-room/admin/delAdmin`,
        data: data,
        token: sessionStorage.getItem("token")
    })
}
