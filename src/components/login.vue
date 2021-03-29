<template>
    <div class="login">
        <img class="login-bgc" src="@/assets/login.jpg" alt="">
        <div class="login-assembly">
            <h3>ClubHouse管理后台登录</h3>   
            <div class="login-input">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item class="login-formitem" prop="account">
                        <el-input class="login-account" placeholder="用户名" type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="login-formitem" prop="checkPass">
                        <el-input placeholder="密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="login-btnbox">
                        <el-button class="login-btn" @click="submitForm('ruleForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>        
        </div>
    </div>
</template>
<script>
import { adminLogin } from '@/api/public.js'
import preventBack from 'vue-prevent-browser-back';
export default {
    mixins: [preventBack],
    name: 'Login',
    data() {
        var validateAccount = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        var validatePass= (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                account: '',
                checkPass: '',
                age: ''
            },
            rules: {
                account: [
                    { validator: validateAccount, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        };
    },
    mounted(){ //防止页面后退
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function () {
        　　history.pushState(null, null, document.URL);
        });
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let data = {
                        password: this.ruleForm.checkPass,
                        username: this.ruleForm.account,
                    }
                    adminLogin(data).then(res=> {
                        if(res.code == 200){
                            this.$store.commit('user/updateUser', res.data)
                            sessionStorage.setItem("token", res.token);
                            this.$router.push({
                                name: 'AdminIndex',
                                path: '/admin'
                            });
                        }else{
                            this.$message({
                                message: res.msg,
                                type: 'warning'
                            });
                        }
                    }).catch(err => {
                        this.$message({
                            message: '登录失败',
                            type: 'warning'
                        });
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="stylus">
    .login
        width 100%;
        height 100%;
        background-color #fff;
        position relative;
        overflow hidden;
        > .login-bgc
            position absolute;
            top: 0;
            left: 0;
            width 100%;
            height 100%;
    .login-assembly
        // margin-top 10%;
        width 500px;
        height 380px;
        position absolute;
        top:50%;
        left 50%;
        margin-left -250px;
        margin-top: -190px;
        background: #FFFFFF;
        box-shadow: 0 11px 22px 0 rgba(109,147,176,0.08);
        border-radius: 30px;
        > h3
            margin-top 50px!important;
            margin-bottom 52px;
            font-family: PingFangSC-Semibold;
            font-size: 24px;
            color: #002241;
            letter-spacing: 0;
            line-height: 24px;
    .login-input
        width 366px
        margin 0 auto;
    .login-formitem > div
        margin-left 0!important;
    .login-btnbox> div
        margin-left 0!important;
    .login-btn
        width 373px;
        background: #7DBFBB;
        box-shadow: 0 12px 59px 0 rgba(159,167,185,0.50);
        border-radius: 10px;
        border: none;
        color #fff;
    .login-btn:hover
        background: #7DBFBB!important;
        color #fff!important;
</style>
