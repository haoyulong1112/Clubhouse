import request from '@/utils/request'
const requestDomain = envConfig.requestDomain

// 获取用户列表
export const exportPhone = data => {
    return request({
        url: `${requestDomain}/club-room/admin/export`,
        data: data
    })
}
