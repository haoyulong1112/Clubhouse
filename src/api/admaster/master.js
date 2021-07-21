import request from '@/utils/request'
const requestDomain = envConfig.requestDomain
console.log(requestDomain);
// 添加管理员
export const addAdmin = data => {
        return request({
            url: `${requestDomain}/club-room/admin/addAdmin`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 获取管理员列表  
export const adminList = data => {
        return request({
            url: `${requestDomain}/club-room/admin/adminList`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 更新管理员
export const updateAdmin = data => {
    return request({
        url: `${requestDomain}/club-room/admin/updateAdmin`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}

// 删除管理员
export const delAdmin = data => {
    return request({
        url: `${requestDomain}/club-room/admin/delAdmin`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}
