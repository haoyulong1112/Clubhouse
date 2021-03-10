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
            <el-table-column prop="date" label="编号ID" width="120"></el-table-column>
            <el-table-column prop="date" label="昵称" width="120"></el-table-column>
            <el-table-column prop="date" label="手机号" width="120"></el-table-column>
            <el-table-column prop="date" label="邮箱" width="120"></el-table-column>
            <el-table-column prop="date" label="加入时间" width="120"></el-table-column>
            <el-table-column prop="date" label="最后登录时间" width="120"></el-table-column>
            <el-table-column prop="date" label="关注的人" width="120"></el-table-column>
            <el-table-column prop="date" label="粉丝" width="120"></el-table-column>
            <el-table-column prop="date" label="关注的俱乐部" width="120"></el-table-column>
            <el-table-column prop="name" label="在线时长" width="120"></el-table-column>
            <el-table-column prop="address" label="开设房间" width="120">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">封禁</el-button>
                    <el-button class="check"
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
            :background="true"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
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
                tableData: [{
                    date: '12',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
                ],
                headerclass: 'headercss',
                usertd: 'user-td',
                total: 100,
                currentPage: 1,
                pageSize: 10
            }
        },
        methods: {
            submitForm(str){
                this.$refs[str].validate((flag) => {
                    if(flag){
                        console.log('查询')
                    }
                })
            },
            handleEdit(index, row) {
                console.log(index, row.date);
                this.$router.push({
                    name: 'userDetail',
                    path: 'userDetail'
                })
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleSizeChange(val){
                console.log(val);
            },
            handleCurrentChange(val){
                console.log(val)
            }
        },
    }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        // height 100%;
        // overflow-y scroll;
        background-color #fff;
        box-shadow: 0 0.11rem 0.22rem 0 rgba(109,147,176,0.08);
        border-radius: 0.08rem;
    /deep/.user-search
        width 100%;
        padding-top: 0.20rem
        > .el-form
            display flex;
            justify-content flex-start;
            > div:first-of-type
                width 5rem
    .phone-label .el-form-item__label
        font-family: PingFangSC-Semibold;
        font-size: 0.16rem!important;
        color: #002241;
        letter-spacing: 0;
    /deep/ .check-btnbox> div
        margin-left 0.20rem!important
    .check-btnbox .el-button
        background: #7DBFBC;
        border-radius: 0.04rem;
        color: #fff;
    .check-btnbox .el-button:hover
        color: #fff;
        background: #7DBFBC;
    .el-table
        padding 0 0.20rem!important;
    .check
        background-color: #7DBFBB!important;
        color: #fff;
        margin-left 0!important;
    .headercss
        background-color: #F5F6FA!important;
        color #002241!important;
    .block
        margin-top 0.50rem
        height: 0.5rem;
        > div
            height: 0.5rem;
    /deep/  .user-td
        padding: 0.06rem 0!important; 
</style>
