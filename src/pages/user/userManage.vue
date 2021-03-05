<template>
    <div class="container">
        <div class="user-search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-form-item label="手机号" class="login-formitem" prop="phone">
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
            highlight-current-row
            height="400"
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
                }],
                headerclass: 'headercss',
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
<style lang="stylus" scope>
    .container
        width 100%;
        height 100%;
        background-color #fff;
        overflow hidden;
    .user-search
        width 100%;
        margin-top: 20px
        > .el-form
            display flex;
            justify-content flex-start;
            > div:first-of-type
                width 500px
    .check-btnbox> div
        margin-left 20px!important
    .el-table
        padding 0 20px!important;
    .check
        background-color: #7DBFBB!important;
        color: #fff;
    .headercss
        background-color: #7DBFBB!important;
        color #fff!important;
    .block
        margin-top 20px
</style>
