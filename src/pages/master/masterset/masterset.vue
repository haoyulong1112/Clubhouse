<template>
    <div class="container">
        <div class="addmaster">
            <el-row :gutter="20">
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <div class="master">
                            <el-form :model="masterForm" :rules="rules1" ref="masterForm" label-width="100px" class="master-ruleForm">
                                <el-form-item label="添加管理员" class="master-formitem" prop="name">
                                    <el-input class="master-input" placeholder="输入姓名" type="text" autocomplete="off" v-model.trim="masterForm.name"></el-input>
                                </el-form-item>
                                <el-form-item class="master-formitem" prop="phone">
                                    <el-input class="master-input" placeholder="输入手机号" type="text" autocomplete="off" v-model.trim="masterForm.phone"></el-input>
                                </el-form-item>
                                <el-form-item class="master-formitem" prop="password">
                                    <el-input class="master-input" placeholder="输入密码" type="text" autocomplete="off" v-model.trim="masterForm.password"></el-input>
                                </el-form-item>
                                <el-form-item class="master-btnbox">
                                    <el-button class="master-btn" @click="submitForm('masterForm')">添加</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="list-box">
            <div class="tab">
                <div class="tab-item active">管理员 <span>{{total}}人</span></div>
            </div>
            <div class="tab-content">  
                <div class="user-box">  
                    <el-table class="list-table"
                        :data="tableData1"
                        highlight-current-row
                        style="width: 100%">
                        <el-table-column prop="id" label="ID" width="60"></el-table-column>
                        <el-table-column label="昵称" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="nikeame" v-model.trim="scope.row.name">
                            </template>
                        </el-table-column>
                        <el-table-column prop="phone" label="手机号" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="phone" v-model.trim="scope.row.phone">
                            </template>
                        </el-table-column>
                        <el-table-column prop="password" label="密码" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="password" v-model.trim="scope.row.password">
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <div class="opation">
                                    <span @click="update(scope.row)">保存</span>/
                                    <span @click="deleted(scope.row)">删除</span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="block">
                <el-pagination
                :background="true"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNo"
                :page-sizes="[10, 20, 30]"
                :page-size="pageSize"
                :pager-count="9"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import { addAdmin ,adminList,updateAdmin, delAdmin} from '@/api/admaster/master.js'
  export default{
    name: 'masterset',
    data() {
        return {
            masterForm: {
                name: '',
                phone: '',
                password: '',
            },
            clubForm: {
                name: '',
                phone: '',
                password: '',
            },
            rules1: {
                name: [
                    { required: true, message: '请填写姓名', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请填写手机号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' }
                ]
            },
            total: 0,
            pageNo: 1,
            pageSize: 10,
            currentTab: 1,
            tableData1: []
        }
    },
    created() {
        this.getAdmasterList();
    },
    methods: {
            handleSizeChange(val){
                console.log('切换每页信息数量')
                this.pageSize = val;
                this.getAdmasterList();
            },
            handleCurrentChange(val){
                console.log('切换页码')
                this.pageNo = val;
                this.getAdmasterList();
            },
            changeTab(index){
                this.currentTab = index;
            },
            // 添加管理员
            submitForm(str){
                this.$refs[str].validate((flag) => {
                    if(flag){
                        let data = {
                            name: this.masterForm.name,
                            password: this.masterForm.password,
                            phone: this.masterForm.phone,
                        }
                        addAdmin(data).then(res => {
                            if(res.code == 200){
                                this.$message({
                                    message: '添加成功',
                                    type: 'success'
                                });
                                this.getAdmasterList();
                            }
                        }).catch(err => {
                            this.$message.error(err.msg);
                        })
                    }
                })
            },
            // 获取管理员列表
            getAdmasterList(){
                let data = {
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                }
                adminList(data).then(res => {
                    if(res.code == 200){
                        this.tableData1 = res.data;
                        this.total = res.total || 0;
                    }
                })
            },
            // 更新管理员
            update(row){
                let data = {
                    id: row.id,
                    name: row.name,
                    password: row.password,
                    phone: row.phone,
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
                    }
                }).catch(err => {
                    this.$message.error(err.msg);
                })
            },
            deleted(row){
                let data = {
                    id: row.id,
                }
                if(!data.id){
                    this.$message.error('缺少参数');
                }
                delAdmin(data).then(res => {
                    if(res.code == 200){
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getAdmasterList();
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
        background-color: #fff;
    .addmaster
        width 100%;
        padding-top 40px;
    .master-ruleForm
        // width 800px;
        // display flex;
        // justify-content flex-start;
        // align-items center;
    /deep/ .master-ruleForm .el-form-item__label
        width 140px!important;
        font-size: 16px;
        color: #002241;
        text-align: right;
        font-weight: bold;
        line-height: 40px;
    /deep/ .master-ruleForm .master-input
        width 220px;
        height 40px;
    /deep/ .master-ruleForm .master-input > input
        width 220px;
        height 40px;
    /deep/ .master-ruleForm .el-form-item__content
        width 140px;
        height 40px;
        line-height: 40px;
    /deep/ .master-ruleForm .el-form-item__content:first-of-type
        margin-left 140px!important;
    .master-btn
        background: #7DBFBC;
        border-radius: 14px;
        width 80px;
        height 35px;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
        // line-height .05px;
        padding 0;
    .list-table
        padding: 0 30px;
    .tab
        width 100%;
        display flex;
        justify-content flex-start;
        align-items center;
        padding-left 30px;
        margin-bottom 10px;
        > .tab-item
            font-size: 16px;
            color: #9FA7B9;
            letter-spacing: 0;
            box-sizing: border-box;
            padding 12px 20px;
            background: #E7EBF4;
            border-radius: 4px;
            margin-right 20px;
            cursor: pointer;
        > .tab-item.active
            color: #fff;
            background: #7DBFBC;
        // margin-bottom: 30px;
    .opation
        font-size: 14px;
        color: #1B8668;
        text-align left;
        > span
            text-decoration: underline;
            cursor: pointer;
    .table-input
        width: 200px;
        height: 40px
        border: 1px solid #9BB0BF;
        border-radius: 4px;
        text-indent: 5px;
    /deep/ .list-table .cell
        text-overflow: initial;
    /deep/ .block
        margin-top 40px;
        // margin-bottom 30px;
</style>
