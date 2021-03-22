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
                    <el-input class="masterset-input" placeholder="输入密码" type="text" v-model="mastersetForm.oldPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" class="masterset-formitem" prop="newPassword">
                    <el-input class="masterset-input" placeholder="输入密码" type="text" v-model="mastersetForm.newPassword" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="身份证号" class="masterset-formitem" prop="idCard">
                    <el-input class="masterset-input" placeholder="输入身份证号" type="text" v-model="mastersetForm.idCard" autocomplete="off"></el-input>
                </el-form-item> -->
                <el-form-item label="手机号" class="masterset-formitem" prop="cellPhone">
                    <el-input class="masterset-input" placeholder="输入手机号" type="text" v-model="mastersetForm.cellPhone" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="邮箱" class="masterset-formitem" prop="email">
                    <el-input class="masterset-input" placeholder="输入邮箱" type="text" v-model="mastersetForm.email" autocomplete="off"></el-input>
                </el-form-item> -->
                <el-form-item class="masterset-btnbox">
                    <el-button class="masterset-btn" @click="submitForm('masterForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'mastermsgset',
    data() {
        return {
            mastersetForm: {
                name: '',
                oldPassword: '',
                newPassword: '',
                idCard: '',
                cellPhone: '',
                email: '',
            },
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
                idCard: [
                    { required: true, message: '请填写身份证号', trigger: 'blur' }
                ],
                cellPhone: [
                    { required: true, message: '请填写电话', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请填写邮箱', trigger: 'blur' }
                ]
            }
        }
    },
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
