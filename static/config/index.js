(function (window) {
    // 区分环境的配置 252 demo prod
    var testConfig = {
        // 请求域名头 pet-pai
        requestDomain: 'http://demo.cwjia.cn',
    }

    var prodConfig = {
        // 请求域名头 pet-pai
        requestDomain: 'https://api.ichongwujia.com',
    }
    window.SITE_CONFIG = {};
    
    // 固定的配置
    var config = {
        // rem布局页面最大宽度
        pageWidth: 1920,
        // // 头像
        // userAvatar: 'http://dev-pet-avatar.oss-cn-beijing.aliyuncs.com/html5/15655992129449057657.png',
        // // 分享图片
        // shareImg: 'http://dev-pet-avatar.oss-cn-beijing.aliyuncs.com/html5/15690470902670425207.png',
        // // favicon
        // favicon: 'https://dev-pet-avatar.oss-cn-beijing.aliyuncs.com/html5/15690470902670425207.png',
        // // 跳转应用宝下载APP
        // downloadApp: function () { window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.haotang.pet&g_f=991653' },
        // // 下载组件logo
        // downloadLogo: 'http://dev-pet-avatar.oss-cn-beijing.aliyuncs.com/html5/15655992124122270752.png',
        // // 下载组件title
        // downloadTitle: '宠物家',
        // // 下载组件description
        // downloadDescription: '专注您的宠物生活',
        // // 验证登录手机号正则
        // cellPhoneReg: /^1[0-9]{10}$/,
        // // 客服电话
        // kfnum: '400-030-0011',
        // kfnumber: '4000300011',
        // // 服务端返回的图片地址兼容性处理
        // getFullImgUrl: function (string) {
        //     if (string && typeof string === 'string') {
        //         return /^http/.test(string) ? string : envConfig.requestDomain + string
        //     }
        // },
        // // 宠物头像图片地址兼容性处理
        // getFullPetAvatar: function (string) {
        //     if (string && typeof string === 'string') {
        //         return /^http/.test(string) ? string : 'http://img.cwjia.cn/static/pavatar/' + string
        //     }
        // }
    }

    // 通过hostname区分环境  http://localhost:8080/
    var testDomainArray = ['localhost']
    var prodDomainArray = ['static.ichongwujia.com']

    var hostname = window.location.hostname

    function isItemInStr (str, arr) {
        for (var i = 0, len = arr.length; i < len; ++i) {
            if (str.indexOf(arr[i]) !== -1) { 
                return true 
            }
        }
        return false
    }

    window.config = config
    window.envConfig = {}
    if (isItemInStr(hostname, testDomainArray)) {
        window.envConfig = testConfig
    }
    // if (isItemInStr(hostname, demoDomainArray)) {
    //     window.envConfig = demoConfig
    // }
    if (isItemInStr(hostname, prodDomainArray)) {
        window.envConfig = prodConfig
    }
}(window))
