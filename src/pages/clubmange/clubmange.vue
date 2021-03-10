<template>
    <div class="container">
        <div class="club-search">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="phone-ruleForm">
                <el-form-item class="phone-label" label="手机号" prop="phone">
                    <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="check-btnbox">
                    <el-button @click="submitForm('ruleForm')">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="club-while">
            <h3>筛选条件</h3>
            <div class="first-class">
                <div>一级分类</div>
                <!-- <div class="active">全部<span></span></div> -->
                <div :class="currentFirstclass == index ? 'active': ''" v-for="(item,index) in firstClass" :key="`a${index}`" @click="changeClass1(index)">{{item}}<span v-if="currentFirstclass == index"></span></div>
                <div class="editclass1">编辑</div>
            </div>
            <div class="second-class">
                <div>二级分类</div>
                <!-- <div class="active">全部<span></span></div> -->
                <div :class="currentSecondclass == index ? 'active': ''" v-for="(item,index) in firstClass" :key="`a${index}`" @click="changeClass2(index)">{{item}}<span v-if="currentSecondclass == index"></span></div>
                <div class="editclass1">编辑</div>
            </div>
        </div>
        <div class="club-number">
            俱乐部总数 <span>32324个</span>
        </div>
        <div class="club-list">
            <el-table 
                :header-row-class-name="headerclass"
                :header-cell-class-name="headerclass"
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column prop="date" label="俱乐部ID" width="120"></el-table-column>
                <el-table-column prop="date" label="头像" width="120"></el-table-column>
                <el-table-column prop="date" label="俱乐部名称" width="120"></el-table-column>
                <el-table-column prop="date" label="分类" width="120"></el-table-column>
                <el-table-column prop="date" label="管理员" width="120"></el-table-column>
                <el-table-column prop="date" label="创建时间" width="120"></el-table-column>
                <el-table-column prop="date" label="房间次数" width="120"></el-table-column>
                <el-table-column prop="name" label="在线时长" width="120"></el-table-column>
                <el-table-column prop="fensi" label="粉丝" width="120">
                    <template slot-scope="scope">
                        <span class="fensisty" @click="goFensi(scope.row.date)">{{scope.row.fensi}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="简介" width="120"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button class="check"
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="fenpage">
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
    </div>
</template>

<script>
  export default{
    name: 'clubmange',
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
            firstClass: [
                '全部',
                '股票',
                '生活',
                '娱乐',
                '心理咨询',
                '教育',
            ],
            tableData: [{
                date: '12',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-08',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-06',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                fensi: '35',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    fensi: '35',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    fensi: '35',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            currentFirstclass: 0,
            currentSecondclass: 0,
            headerclass: 'headerclass',
            total: 100,
            currentPage: 1,
            pageSize: 10
        }
    },
    methods: {
        changeClass1(index){
            this.currentFirstclass = index;
        },
        changeClass2(index){
            this.currentSecondclass = index;
        },
        submitForm(str){
            this.$refs[str].validate((flag) => {
                if(flag){
                    console.log('查询')
                }
            })
        },
        goFensi(id){
            console.log(id)
        },
        handleEdit(id){
            console.log(id)
        },
        handleSizeChange(val){
            console.log(val);
        },
        handleCurrentChange(val){
            console.log(val)
        }
    }
  }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        background-color: #fff;
    /deep/.club-search
        width 100%;
        padding-top: 0.20rem
        > .el-form
            display flex;
            justify-content flex-start;
            > div:first-of-type
                width 5rem
    /deep/ .phone-label .el-form-item__label
        font-family: PingFangSC-Semibold;
        font-size: 0.2rem!important;
        color: #002241!important;
        width 1rem!important;
        letter-spacing: 0;
        margin-left 0.3rem;
    /deep/ .phone-label .el-form-item__content
        margin-left 1.05rem;
    /deep/ .check-btnbox> div
        margin-left 0.20rem!important
    .check-btnbox .el-button
        background: #7DBFBC;
        border-radius: 0.04rem;
        color: #fff;
    .club-number
        width 100%;
        text-align left;
        margin-top: .50rem;
        box-sizing: border-box;
        padding-left: .30rem;
        font-family: PingFangSC-Medium;
        font-size: .16rem;
        color: #2C3645;
        letter-spacing: 0;
        > span
            font-weight: bolder;
    .club-while
        width 100%;
        padding-left 0.3rem;
        box-sizing: border-box; 
        > h3
            text-align left;
            text-indent: .10rem;
            font-family: PingFangSC-Medium;
            font-size: .16rem;
            color: #002241;
        > .first-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            box-sizing border-box;
            padding-left .10rem;
            height .50rem;
            position: relative;
            background: #E0F0F0;
            > div
                margin-right: .20rem;
                position relative;
                box-sizing border-box;
                cursor: pointer;
                font-family: PingFangSC-Semibold;
                font-size: .16rem;
                color: #717985;
                letter-spacing: 0;
                > span
                    position absolute;
                    bottom -0.1rem;
                    left 50%;
                    width .2rem;
                    height .05rem;
                    margin-left -0.1rem;
                    background-color #ed1941;
                    border-radius: .02rem;
            > div:first-of-type
                font-size .16rem;
                font-family: PingFangSC-Medium;
                color: #2C3645;
                letter-spacing: 0;
            > div.active
                font-weight: bolder;
                color: #2C3645
            .editclass1
                position absolute;
                right .10rem;
                top: .20rem;
                font-family: PingFangSC-Medium;
                font-size: .14rem;
                color: #1B8668;
                text-decoration: underline
        > .second-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            box-sizing border-box;
            padding-left .10rem;
            height .50rem;
            position: relative;
            background: #F8FCFC;
            > div
                margin-right: .20rem;
                position relative;
                box-sizing border-box;
                cursor: pointer;
                font-family: PingFangSC-Semibold;
                font-size: .16rem;
                color: #717985;
                letter-spacing: 0;
                > span
                    position absolute;
                    bottom -0.1rem;
                    left 50%;
                    width .2rem;
                    height .05rem;
                    margin-left -0.1rem;
                    background-color #ed1941;
                    border-radius: .02rem;
            > div:first-of-type
                font-size .16rem;
                font-family: PingFangSC-Medium;
                color: #2C3645;
                letter-spacing: 0;
            > div.active
                font-weight: bolder;
                color: #2C3645
            .editclass1
                position absolute;
                right .10rem;
                top: .20rem;
                font-family: PingFangSC-Medium;
                font-size: .14rem;
                color: #1B8668;
                text-decoration: underline
    .club-list
        padding-left: 0.3rem;
        margin-top 0.12rem;
    /deep/ .headerclass
        background: #F5F6FA;   
    /deep/ .check
        background-color: #7DBFBB!important;
        color: #fff;
        margin-left 0!important;
    .block
        margin-top 0.50rem
    .fensisty
        text-decoration underline;
        font-family: PingFangSC-Medium;
        font-size: .14rem;
        color: #1B8668;
        cursor pointer;
</style>
