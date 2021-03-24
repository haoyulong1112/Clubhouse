<template>
    <div class="container">
        <el-form ref="phoneform" class="phoneform" :model="formData" label-width="80px" :rules="rules">
            <el-form-item class="phonemange" label="" prop="phonetext">
                <el-input type="textarea" v-model="formData.phonetext" autocomplete="off" :rows="10" placeholder="多个手机号以英文逗号分隔"></el-input>
            </el-form-item>
            <el-form-item class="subphone-btnbox">
                <el-button class="exportbtn" @click="onSubmit('phoneform')">导入</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { exportPhone } from '@/api/exportphone/exportphone.js'
export default {
    name: 'importPhone',
    data() {
        let validatePhone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请填写手机号'));
            } else if(value.indexOf('，') != -1){
                callback(new Error('内容中含有中文逗号'));
            }else{
                callback();
            }
        };
        return {
            formData: {
                phonetext: ''
            },
            rules: {
                phonetext: [
                    {
                        validator: validatePhone, 
                        trigger:'blur'
                    }
                ]
            }
        }
    },
    methods: {
        onSubmit(formname){
            this.$refs[formname].validate((flag) => {
                if(flag){
                    this.exportPhone();
                }
            })
        },
        exportPhone(){
            let data = {
                phones: this.formData.phonetext
            }
            console.log(data);
            exportPhone(data).then(res => {
                if(res.code == 200){
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                }
            }).catch(err => {
                this.$message.error(err.msg);
            })
        }
    },
}
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        height 100%;
        background-color #fff;
        overflow hidden;
        padding 30px;
        box-sizing border-box;
    .phoneform
        text-align left;
    .subphone-btnbox> div
        margin-left 0!important;  
    .exportbtn
        background-color: #7DBFBB;
        color: #fff;
    .phonemange > div
        margin: 20px 30px 0!important;

    /deep/ .phoneform .el-form-item__content
        margin-left 0!important;
</style>
