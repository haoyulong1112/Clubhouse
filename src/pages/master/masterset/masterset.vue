<template>
    <div class="container">
        <div class="addmaster">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="master">
                            <el-form :model="masterForm" :rules="rules1" ref="masterForm" label-width="100px" class="master-ruleForm">
                                <el-form-item label="添加管理员" class="master-formitem" prop="name">
                                    <el-input class="master-input" placeholder="输入姓名" type="text" v-model="masterForm.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="master-formitem" prop="phone">
                                    <el-input class="master-input" placeholder="输入手机号" type="text" v-model="masterForm.phone" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="master-formitem" prop="password">
                                    <el-input class="master-input" placeholder="输入密码" type="text" v-model="masterForm.password" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="master-btnbox">
                                    <el-button class="master-btn" @click="submitForm('masterForm')">添加</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="clubmaster">
                            <el-form :model="clubForm" :rules="rules2" ref="clubForm" label-width="100px" class="master-ruleForm">
                                <el-form-item label="俱乐部管理员" class="master-formitem" prop="name">
                                    <el-input class="master-input" placeholder="输入姓名" type="text" v-model="clubForm.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="master-formitem" prop="phone">
                                    <el-input class="master-input" placeholder="输入手机号" type="text" v-model="clubForm.phone" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="master-formitem" prop="password">
                                    <el-input class="master-input" placeholder="输入密码" type="text" v-model="clubForm.password" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item class="master-btnbox">
                                    <el-button class="master-btn" @click="submitForm('clubForm')">添加</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </el-col>
            </el-row>
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
                        <el-table-column prop="id" label="ID" width="60"></el-table-column>
                        <el-table-column label="昵称" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="nikeame" v-model="scope.row.name">
                            </template>
                        </el-table-column>
                        <el-table-column prop="phone" label="手机号" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="phone" v-model="scope.row.phone">
                            </template>
                        </el-table-column>
                        <el-table-column prop="password" label="密码" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="password" v-model="scope.row.password">
                            </template>
                        </el-table-column>
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
                        <el-table-column prop="id" label="ID" width="60"></el-table-column>
                        <el-table-column prop="name" label="昵称">
                            <template slot-scope="scope" width="220">
                                <input class="table-input" type="text" name="nikeame" v-model="scope.row.name">
                            </template>
                        </el-table-column>
                        <el-table-column prop="phone" label="手机号" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="phone" v-model="scope.row.phone">
                            </template>
                        </el-table-column>
                        <el-table-column prop="password" label="密码" width="220">
                            <template slot-scope="scope">
                                <input class="table-input" type="text" name="password" v-model="scope.row.password">
                            </template>
                        </el-table-column>
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
            rules2: {
                name: [
                    { required: true, message: '请填写姓名', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请填写手机号', trigger: 'blur' }
                ],
                newPapasswordssword: [
                    { required: true, message: '请填写密码', trigger: 'blur' }
                ]
            },
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
            ],
            tableData2: [
                {
                    id: '001',
                    name: '非凡哥',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '002',
                    name: '滚滚滚',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '003',
                    name: '呵呵呵呵',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '004',
                    name: '电风扇',
                    phone: '17839392020',
                    password: '2222234',
                },
                {
                    id: '001',
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
        overflow hidden;
        // height 100%;
        // padding-bottom: 30px
        // margin-bottom 50px
        // box-sizing border-box;
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
    .block
        margin-top 40px;
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
    // /deep/ .master-ruleForm .el-form-item__content:nth-child(2)
    //     margin-left 0.1rem!important;
    // /deep/ .master-ruleForm .el-form-item__content:nth-child(3)
    //     margin-left 0.1rem!important;
</style>
