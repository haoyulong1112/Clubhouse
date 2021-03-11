<template>
    <div class="container">
        <div class="club-search">
            <el-form :model="ruleForm" :inline="true" ref="ruleForm" label-width="150px" class="phone-ruleForm">
                <el-form-item class="phone-label" label="手机号" prop="phone">
                    <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="phone-label" label="俱乐部名称" prop="phone">
                    <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="phone-label" label="状态" prop="phone">
                    <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="check-btnbox">
                    <el-button @click="submitForm('ruleForm')">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="list-box">
            <div class="tab">
                <div :class=" currentTab == 1 ? 'tab-item active': 'tab-item'" @click="changeTab(1)">管理员 <span>8人</span></div>
                <div :class=" currentTab == 2 ? 'tab-item active': 'tab-item'" @click="changeTab(2)">俱乐部管理员 <span>22人</span></div>
            </div>
            <div class="tab-content">  
                <div class="user-box">  
                    <el-table v-if="currentTab == 1 ? true : false" class="list-table"
                        :data="tableData1"
                        highlight-current-row
                        style="width: 100%">
                        <el-table-column prop="id" label="ID"></el-table-column>
                        <el-table-column prop="name" label="昵称"></el-table-column>
                        <el-table-column prop="phone" label="手机号"></el-table-column>
                        <el-table-column prop="password" label="邮箱"></el-table-column>
                        <el-table-column label="操作">
                            <template>
                                <div class="opation">
                                    <span>保存</span>/
                                    <span>删除</span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table v-if="currentTab == 2 ? true : false" class="list-table"
                        :data="tableData2"
                        highlight-current-row
                        style="width: 100%">
                        <el-table-column prop="id" label="ID"></el-table-column>
                        <el-table-column prop="name" label="昵称"></el-table-column>
                        <el-table-column prop="phone" label="手机号"></el-table-column>
                        <el-table-column prop="password" label="邮箱"></el-table-column>
                        <el-table-column label="操作">
                            <template>
                                <div class="opation">
                                    <span>保存</span>/
                                    <span>删除</span>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
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
    name: 'clubexaminelist',
    data() {
        return {
            ruleForm: {
                name: '',
                phone: '',
                password: '',
            },
            // rules: {
            //     name: [
            //         { required: true, message: '请填写姓名', trigger: 'blur' }
            //     ],
            //     phone: [
            //         { required: true, message: '请填写手机号', trigger: 'blur' }
            //     ],
            //     password: [
            //         { required: true, message: '请填写密码', trigger: 'blur' }
            //     ]
            // },
            total: 100,
            currentPage: 1,
            pageSize: 10,
            currentTab: 1,
            tableData1: [
                {
                    id: '001',
                    name: '张云',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '002',
                    name: '登记卡',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '003',
                    name: '李丹妮',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '004',
                    name: '都解决',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '005',
                    name: '张云',
                    phone: '17839392020',
                    password: '2222234',
                }
            ]
        }
    },
    methods: {
            handleSizeChange(val){
                console.log(val);
            },
            handleCurrentChange(val){
                console.log(val)
            },
            changeTab(index){
                this.currentTab = index;
            }
    },
  }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        background-color: #fff;
        height 100%;
    .club-search
        width 100%;
        padding-top 20px;
    .phone-ruleForm
        // width 800px;
        // display flex;
        // justify-content flex-start;
        // align-items center;
    /deep/ .phone-ruleForm .el-form-item__label
        width 100px!important;
        font-size: 16px;
        color: #002241;
        text-align: left;
        font-weight: bold;
        line-height: 40px;
    /deep/ .phone-ruleForm .el-form-item__content
        width 220px;
        height 40px;
        line-height: 40px;
        margin-left 0!important;
    // /deep/ .phone-ruleForm .el-form-item__content:first-of-type
    //     margin-left 140px!important;
    .phone-btn
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
    .block
        margin-top 40px;
    .opation
        font-size: 14px;
        color: #1B8668;
        text-align center;
        > span
            text-decoration: underline;
            cursor: pointer;
    // /deep/ .master-ruleForm .el-form-item__content:nth-child(2)
    //     margin-left 0.1rem!important;
    // /deep/ .master-ruleForm .el-form-item__content:nth-child(3)
    //     margin-left 0.1rem!important;
</style>
