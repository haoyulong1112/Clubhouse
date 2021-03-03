import request from '@/plugin/axios/index'
import { Message } from 'element-ui';
export default (options = {}) => {
    let url = options.url ? options.url : '';
    let method = options.method ? options.method : 'get';
    let data = options.data ? options.data : {};
    if(!url) { 
        Message.error('无接口地址，无法发送请求！') 
        return
    };
    return request ({
        url: url,
        method: method,
        params: data
    })
}
