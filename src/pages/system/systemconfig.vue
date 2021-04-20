<template>
    <div class="container">
        <div class="system-input">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="system-ruleForm">
                <el-form-item label="客服电话" class="system-formitem" prop="phone">
                    <el-input class="system-phone" placeholder="输入电话" type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="微信号" class="system-formitem" prop="wxCode">
                    <el-input placeholder="微信号" type="text" v-model="ruleForm.wxCode" autocomplete="off"></el-input>
                </el-form-item> -->
                <el-form-item class="system-btnbox">
                    <el-button class="system-btn" @click="submitForm('ruleForm')">保存</el-button>
                </el-form-item>
            </el-form>
        </div>        
    </div>
</template>

<script>
    import { setServicePhone,getServicePhone } from '@/api/system/system.js'
  export default{
    name: 'systemconfig',
    data() {
        return {
            ruleForm: {
                phone: '',
            },
            rules: {
                phone: [
                    { required: true, message: '请填写电话', trigger: 'blur' }
                ]
            },
        }
    },
    created() {
        // this.ruleForm.phone = this.$store.state.common.phone;
        getServicePhone().then(res =>{
            console.log(res);
            if(res.code == 200){
                this.ruleForm.phone = res.data || '';
            }
        })
    },
    methods: {
        submitForm(formname){
            this.$refs[formname].validate((flag) => {
                if(flag){
                    setServicePhone({
                        phone: this.ruleForm.phone
                    }).then(res => {
                        if(res.code =200){
                            // this.$store.commit('common/updatePhone', this.ruleForm.phone)
                            this.$message({
                                message: res.msg,
                                type: 'success'
                            });
                        }
                    }).catch(err => {
                        this.$message.error(err.msg);
                    })
                }
            })
        },
    },
  }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        height 100%;
        background-color: #fff;
    .system-input
        width 100%;
        padding-top 40px;
    .system-ruleForm
        width 500px;
    /deep/ .system-ruleForm .el-form-item__label
        // font-size: .16px;
        color: #002241;
        font-weight: bold;
        text-align: right;
    .system-btn
        background: #7DBFBC;
        border-radius: 14px;
        width 102px;
        height 26px;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        padding 0;
</style>
