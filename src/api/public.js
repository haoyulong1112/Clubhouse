import request from '@/utils/request'
const requestDomain = envConfig.requestDomain
console.log(requestDomain);
// 登录接口
export const adminLogin = data => {
    return request({
        url: `${requestDomain}/club-room/admin/adminLogin`,
        data: data
    })
}
