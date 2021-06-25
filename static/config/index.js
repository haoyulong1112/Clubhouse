(function (window) {
    // 区分环境的配置 252 demo prod
    var demoConfig = {
        // 请求域名头 pet-pai
        requestDomain: 'http://8.141.49.230:8200',
        // 跨域
        // requestDomain: '/demo',
    }
    var prodConfig = {
        // 请求域名头 pet-pai
        requestDomain: 'http://ch.huitingdata.com',
        // 分享appid
        // shareAppid: '',
        // 分享域名头
        shareDomain: 'http://www.huitingdata.com',
        // 管理域名头
        manageDomain: ''
    }

    window.SITE_CONFIG = {};
    
    // 固定的配置
    var config = {
        // rem布局页面最大宽度
        pageWidth: 1920,
    }

    // 通过hostname区分环境  http://localhost:8080/
    var demoDomainArray = ['8.141.49.230']
    var prodDomainArray = ['www.huitingdata.com']

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
    if (isItemInStr(hostname, demoDomainArray)) {
        window.envConfig = demoConfig
    }
    if (isItemInStr(hostname, prodDomainArray)) {
        window.envConfig = prodConfig
    }
    console.log(window.envConfig)
}(window))
