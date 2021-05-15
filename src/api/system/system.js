import request from '@/utils/request'
const requestDomain = envConfig.requestDomain

// 保存客服信息
export const setServicePhone = data => {
        return request({
            url: `${requestDomain}/club-room/admin/setServicePhone`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 获取客服信息
export const getServicePhone = data => {
    return request({
        url: `${requestDomain}/club-room/admin/getServicePhone`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}