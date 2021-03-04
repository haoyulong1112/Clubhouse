<template>
    <div class="login">
        <div class="login-assembly">
            <h3>ClubHouse管理后台登录</h3>           
        </div>
        <div class="login-input">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item class="login-formitem" prop="account">
                    <el-input class="login-account" placeholder="用户名" type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="login-formitem" prop="checkPass">
                    <el-input placeholder="密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="login-btnbox">
                    <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex'
import { Message } from 'element-ui';
import { getIndexMsg } from '@/api/public.js'
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
    computed: {
        ...mapState(['username','password'])
    },
    mounted(){ //防止页面后退
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function () {
        　　history.pushState(null, null, document.URL);
        });
    },
    methods: {
        // 注册vuex方法
        ...mapMutations(['updateUsername', 'updatePassword']),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                console.log(valid);
                if (valid) {
                    this.$store.commit('user/updateUsername', this.ruleForm.account)
                    this.$store.commit('user/updatePassword', this.ruleForm.checkPass)
                    // this.updateUsername(this.ruleForm.account);
                    // this.updatePassword(this.ruleForm.checkPass);
                    console.log(this.$store.state.user.username);
                    console.log(this.$store.state.user.password);
                    console.log('submit!');
                    this.$router.push({
                        name: 'AdminIndex',
                        path: '/admin'
                    },);
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
    .login-assembly
        margin-top 10%;
    .login-input
        width 400px
        margin 0 auto;
    .login-formitem > div
        margin-left 0!important;
    .login-btnbox> div
        margin-left 0!important;
    .login-btn
        width 300px;
</style>
