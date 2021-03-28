<template>
    <div class="container">
        <div class="user-search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="phone-ruleForm">
                <el-form-item class="phone-label" label="手机号" prop="phone">
                    <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="check-btnbox">
                    <el-button @click="submitForm('ruleForm')">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table 
            :header-row-class-name="headerclass"
            :header-cell-class-name="headerclass"
            :data="tableData"
            :cell-class-name="usertd"
            highlight-current-row
            style="width: 100%">
            <el-table-column prop="id" label="编号ID" width="120"></el-table-column>
            <el-table-column prop="nikeName" label="昵称" width="120"></el-table-column>
            <el-table-column prop="cellPhone" label="手机号" width="120"></el-table-column>
            <!-- <el-table-column prop="date" label="邮箱" width="120"></el-table-column> -->
            <el-table-column prop="createTime" label="加入时间" width="120"></el-table-column>
            <el-table-column prop="offLineTime" label="最后登录时间" width="120"></el-table-column>
            <el-table-column prop="followSize" label="关注的人" width="120"></el-table-column>
            <el-table-column prop="fansSize" label="粉丝" width="120"></el-table-column>
            <el-table-column prop="followClubSize" label="关注的俱乐部" width="120"></el-table-column>
            <el-table-column prop="totalTime" label="在线时长" width="120"></el-table-column>
            <el-table-column prop="createClubCount" label="开设房间" width="120">
            </el-table-column>
            <el-table-column prop="address" label="举报次数" width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div class="usertable-btn" @click="close(scope.$index, scope.row)">封禁</div>
                    <div class="usertable-btn" @click="relieve(scope.$index, scope.row)">解除</div>
                    <div class="usertable-btn" @click="handleEdit(scope.$index, scope.row)">查看详情</div>
                </template>
            </el-table-column>
        </el-table>
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
</template>

<script>
    import { getUserList,updateUserStatus } from '@/api/user/user.js'
    export default{
        name: 'userManage',
        data() {
            return {
                ruleForm: {
                    phone: ''
                },
                rules: {
                    phone: [
                        { required: true, message: '请填写手机号', trigger: 'blur' }
                    ]
                },
                tableData: [],
                headerclass: 'headercss',
                usertd: 'user-td',
                total: 100,
                pageNo: 1,
                pageSize: 10,
                phone: ''
            }
        },
        created() {
            this.getUserLists();
        },
        methods: {
            submitForm(str){
                this.$refs[str].validate((flag) => {
                    if(flag){
                        this.getUserLists();
                    }
                })
            },
            //  获取用户列表
            getUserLists(){
                let data = {
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                };
                if(this.ruleForm.phone){
                    data.phone = this.ruleForm.phone;
                }
                getUserList(data).then(res => {
                    if(res.code == 200){
                        this.tableData = res.data;
                    }
                }).catch(err => {
                    this.$message.error(err.msg);
                })
            },
            handleEdit(index, row) {
                console.log(index, row);
                this.$store.commit('user/setCurrentdata', row)
                this.$router.push({
                    name: 'userDetail',
                    path: 'userDetail'
                })
            },
            close(index, row) {
                this.updateUserStatus(row.id,1)
            },
            relieve(index, row){
                this.updateUserStatus(row.id,0)
            },
            // 封禁 解除
            updateUserStatus(id,status){
                let data = {
                    userId: id,
                    status: status
                }
                updateUserStatus(data).then(res =>{
                    if(res.code == 200){
                        this.$message({
                            message: res.msg,
                            type: 'success'
                        });
                    }
                }).catch(err => {
                    this.$message.error(err.msg);
                })

            },
            handleSizeChange(val){
                console.log(val);
                console.log('切换每页信息数量')
                this.pageSize = val;
                this.getUserLists();
            },
            handleCurrentChange(val){
                console.log('切换页码')
                console.log(val)
                this.pageNo = val;
                this.getUserLists();
            }
        },
    }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        // overflow hidden;
        padding-bottom 60px;
        background-color #fff;
        box-shadow: 0 11px 22px 0 rgba(109,147,176,0.08);
        border-radius: 8px;
    /deep/.user-search
        width 100%;
        padding-top: 20px
        > .el-form
            display flex;
            justify-content flex-start;
            > div:first-of-type
                // width 500px
    /deep/ .phone-label .el-form-item__label
        font-family: PingFangSC-Semibold;
        font-size: 16px!important;
        color: #002241;
        letter-spacing: 0;
    /deep/ .phone-label > .el-form-item__content
        width 220px!important;
        height 40px!important;
    /deep/ .check-btnbox> div
        margin-left 20px!important
    .check-btnbox .el-button
        background: #7DBFBC;
        border-radius: 4px;
        color: #fff;
        width 80px;
        height 40px;
    .check-btnbox .el-button:hover
        color: #fff;
        background: #7DBFBC;
    .el-table
        padding 0 20px!important;
    .check
        background-color: #7DBFBB!important;
        color: #fff;
        margin-left 0!important;
    .headercss
        background-color: #F5F6FA!important;
        color #002241!important;
    .block
        margin-top 40px
        // margin-bottom 60px
    /deep/  .user-td
        padding: 0px 0!important; 
    /deep/ .headercss
        background: #F5F6FA;
        color: #002241;
    .usertable-btn
        font-size: 14px;
        color: #7DBFBB;
        text-decoration underline;
        margin-right 5px
        white-space nowrap;
        cursor: pointer;
</style>
