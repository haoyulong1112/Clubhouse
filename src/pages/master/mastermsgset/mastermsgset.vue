<template>
    <div class="container">
        <div class="masterset-title">
            修改信息
        </div>
        <div class="masterset">
            <el-form :model="mastersetForm" :rules="rules" ref="mastersetForm" label-width="100px" class="masterset-ruleForm">
                <el-form-item label="姓名" class="masterset-formitem" prop="name">
                    <el-input class="masterset-input" placeholder="输入姓名" type="text" v-model="mastersetForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="旧密码" class="masterset-formitem" prop="oldPassword">
                    <el-input class="masterset-input" placeholder="输入密码" type="password" v-model="mastersetForm.oldPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" class="masterset-formitem" prop="newPassword">
                    <el-input class="masterset-input" placeholder="输入密码" type="password" v-model="mastersetForm.newPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" class="masterset-formitem" prop="cellPhone">
                    <el-input class="masterset-input" placeholder="输入手机号" type="text" v-model="mastersetForm.cellPhone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="masterset-btnbox">
                    <el-button class="masterset-btn" @click="submitForm('mastersetForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import { updateAdmin } from '@/api/admaster/master.js'
  export default{
    name: 'mastermsgset',
    data() {
        return {
            mastersetForm: {
                name: '',
                oldPassword: '',
                newPassword: '',
                cellPhone: '',
            },
            userdetail: {},
            rules: {
                name: [
                    { required: true, message: '请填写姓名', trigger: 'blur' }
                ],
                oldPassword: [
                    { required: true, message: '请填写旧密码', trigger: 'blur' }
                ],
                newPassword: [
                    { required: true, message: '请填写新密码', trigger: 'blur' }
                ],
                cellPhone: [
                    { required: true, message: '请填写电话', trigger: 'blur' }
                ]
            }
        }
    },
    created() {
        this.userdetail = this.$store.state.user.userdetail;
        this.mastersetForm.name = this.userdetail.name;
        this.mastersetForm.oldPassword = this.userdetail.password;
        this.mastersetForm.cellPhone = this.userdetail.phone;
    },
    methods:{
        submitForm(str){
            this.$refs[str].validate((flag) => {
                if(flag){
                    this.update(this.mastersetForm);
                }
            })
        },
        // 更新管理员
        update(mastersetForm){
            let data = {
                id: this.userdetail.id,
                name: mastersetForm.name,
                password: mastersetForm.newPassword,
                phone: mastersetForm.cellPhone,
            }
            if(!data.id){
                this.$message.error('缺少参数');
            }
            updateAdmin(data).then(res => {
                if(res.code == 200){
                    this.$message({
                        message: '更新成功',
                        type: 'success'
                    });
                    setTimeout(()=>{
                        this.$router.push({
                            name: 'Login'
                        });
                    },1500)
                }
            }).catch(err => {
                this.$message.error(err.msg);
            })
        },
    }
  }
</script>

<style lang="stylus" scoped>
    .container
        width 100%;
        height 100%;
        background-color: #fff;
        overflow hidden;
    .masterset-title
        font-size: 20px;
        color: #002241;
        font-weight: bold;
        margin-left 22px;
        margin-top 23px;
        margin-bottom 38px;
        text-align left;
    /deep/.masterset-ruleForm .el-form-item__label
        text-align left;
        padding-left 30px;
        width 120px!important;
    /deep/.masterset-ruleForm .el-form-item__content
        width 220px;
        height 40px;
        margin-left 120px!important;
    /deep/ .masterset-ruleForm .masterset-input
        width 220px;
        height 40px;
    .masterset-btn
        width 102px;
        height 26px;
        padding 0;
        background: #7DBFBC;
        border-radius: 14px;
        color #fff;
</style>
