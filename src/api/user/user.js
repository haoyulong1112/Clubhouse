import request from '@/utils/request'
const requestDomain = envConfig.requestDomain
    // 获取用户列表
export const getUserList = data => {
        return request({
            url: `${requestDomain}/club-room/admin/userList`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 封禁用户
export const updateUserStatus = data => {
        return request({
            url: `${requestDomain}/club-room/admin/updateUserStatus`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 获取用户详情
export const userDetail = data => {
    return request({
        url: `${requestDomain}/club-room/admin/userDetail`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}