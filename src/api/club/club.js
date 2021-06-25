import request from '@/utils/request'
const requestDomain = envConfig.requestDomain

// 获取俱乐部列表
export const getClub = data => {
        return request({
            url: `${requestDomain}/club-room/admin/getClub`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 获取一级标题
export const getFirstTopic = data => {
        return request({
            url: `${requestDomain}/club-room/admin/getFirstTopic`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 获取二级标题
export const getSecondTopic = data => {
    return request({
        url: `${requestDomain}/club-room/admin/getSecondTopic`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}

// 添加标题
export const addTopic = data => {
        return request({
            url: `${requestDomain}/club-room/admin/addTopic`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 删除标题
export const delTopic = data => {
        return request({
            url: `${requestDomain}/club-room/admin/delTopic`,
            data: data,
            header: {
                token: sessionStorage.getItem("token"),
                cellPhone: sessionStorage.getItem("cellPhone")
            }
        })
    }
    // 审核列表
export const auditList = data => {
    return request({
        url: `${requestDomain}/club-room/admin/auditList`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}

// 审核详情
export const auditDetailInfo = data => {
    return request({
        url: `${requestDomain}/club-room/admin/auditDetailInfo`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}

// 审核
export const auditClub = data => {
    return request({
        url: `${requestDomain}/club-room/admin/audit`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}

// 俱乐部详情
export const clubDetail = data => {
    return request({
        url: `${requestDomain}/club-room/admin/clubDetail`,
        data: data,
        header: {
            token: sessionStorage.getItem("token"),
            cellPhone: sessionStorage.getItem("cellPhone")
        }
    })
}