<template>
    <div>
        <h3>这是登录页面，由于功能尚未完善，<br>
            所以此处忽略登录功能，直接通过点击进入后台管理页面
        </h3>
        <router-link to="/admin">进入后台管理首页</router-link>
    </div>
</template>
<script>
import { Message } from 'element-ui';
import { getIndexMsg } from '@/api/public.js'
export default {
    name: 'Login',
    data() {
        return {
            
        }
    },
    created() {
        getIndexMsg().then(res => {
            console.log(res);
            // if(response.status != 200){
                // Message.error('错了哦，这是一条错误消息');
            // }
        })
    },
}
</script>
