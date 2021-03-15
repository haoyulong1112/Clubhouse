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
                <div :class="currentFirstclass == -1 ? 'active': ''" @click="changeClass1(-1)">全部<span v-if="currentFirstclass == -1"></span></div>
                <div :class="currentFirstclass == index ? 'active': ''" v-for="(item,index) in firstClass1" :key="`a${index}`" @click="changeClass1(index)">{{item.class}}
                    <span v-if="currentFirstclass == index"></span>
                    <img class="delclass" v-if="delClassimg1" src="@/assets/del.png" alt="" @click.stop="delClass(index)">
                </div>
                <div class="delete" @click="candel1">{{deltext1}}</div>
                <div class="editclass1" @click="addClass">新增</div>
            </div>
            <div class="second-class">
                <div>二级分类</div>
                <div :class="currentSecondclass == -1 ? 'active': ''" @click="changeClass2(-1)">全部<span v-if="currentSecondclass == -1"></span></div>
                <div :class="currentSecondclass == index ? 'active': ''" v-for="(item,index) in firstClass2" :key="`a${index}`" @click="changeClass2(index)">{{item.class}}
                    <span v-if="currentSecondclass == index"></span>
                    <img class="delclass" v-if="delClassimg2"  src="@/assets/del.png" alt="">
                </div>
                <div class="delete" @click="candel2">{{deltext2}}</div>
                <div class="editclass1">新增</div>
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
                <el-table-column prop="date" label="俱乐部ID"></el-table-column>
                <el-table-column prop="date" label="头像"></el-table-column>
                <el-table-column prop="date" label="俱乐部名称"></el-table-column>
                <el-table-column prop="date" label="分类"></el-table-column>
                <el-table-column prop="date" label="管理员"></el-table-column>
                <el-table-column prop="date" label="创建时间"></el-table-column>
                <el-table-column prop="date" label="房间次数"></el-table-column>
                <el-table-column prop="name" label="在线时长"></el-table-column>
                <el-table-column prop="fensi" label="粉丝">
                    <template slot-scope="scope">
                        <span class="fensisty" @click="goFensi(scope.row.date)">{{scope.row.fensi}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="简介"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="check" @click="handleEdit(scope.$index, scope.row)">查看详情</span>
                        <!-- <el-button class="check"
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">查看详情</el-button> -->
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
            firstClass1: [
                {
                    id: 0,
                    class: '点击',
                },
                {
                    id: 1,
                    class: '股票',
                },
                {
                    id: 2,
                    class: '生活',
                },
                {
                    id: 3,
                    class: '娱乐',
                },
                {
                    id: 4,
                    class: '心理咨询',
                }
            ],
            firstClass2: [
                {
                    id: 0,
                    class: '点击',
                },
                {
                    id: 1,
                    class: '股票',
                },
                {
                    id: 2,
                    class: '生活',
                },
                {
                    id: 3,
                    class: '娱乐',
                },
                {
                    id: 4,
                    class: '心理咨询',
                }
            ],
            delClassimg1: false,
            delClassimg2: false,
            deltext1: '删除',
            deltext2: '删除',
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
            currentFirstclass: -1,
            currentSecondclass: -1,
            headerclass: 'headerclass',
            total: 100,
            currentPage: 1,
            pageSize: 10
        }
    },
    methods: {
        changeClass1(index){
            console.log(index);
            this.currentFirstclass = index;
        },
        changeClass(val){
            console.log(val);
            // this.currentFirstclass = index;
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
            this.$router.push({
                name: 'clubdetail',
                path: 'clubdetail'
            })
        },
        handleSizeChange(val){
            console.log(val);
        },
        handleCurrentChange(val){
            console.log(val)
        },
        candel1(){
            this.currentFirstclass = -1;
            if(this.delClassimg1){
                this.delClassimg1 = false;
                this.deltext1 = '删除';
            }else{
                this.delClassimg1 = true;
                this.deltext1 = '取消';
            }
        },
        candel2(){
            this.currentSecondclass = -1;
            if(this.delClassimg2){
                this.delClassimg2 = false;
                this.deltext2 = '删除';
            }else{
                this.delClassimg2 = true;
                this.deltext2 = '取消';
            }
        },
        delClass(index){
            this.$confirm('是否删除该分类?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });

                    let data = this.firstClass1;
                    for(let i in data){
                        if(i == index){
                            data.splice(index, 1); 
                        }
                    }
                    this.firstClass1 = data;
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        addClass(){
            this.delClassimg1 = false;
            this.$prompt('请输入分类', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                    }).then(({ value }) => {
                        let newClass = {
                            class: value,
                        }
                        this.firstClass1.push(newClass);
                    this.$message({
                        type: 'success',
                        message: '添加成功' 
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
            });
        }
    }
  }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        background-color: #fff;
        // padding-bottom 60px
    /deep/.club-search
        width 100%;
        padding-top: 20px
        > .el-form
            display flex;
            justify-content flex-start;
            > div:first-of-type
                width 500px
    /deep/ .phone-label .el-form-item__label
        font-family: PingFangSC-Semibold;
        font-size: 20px!important;
        color: #002241!important;
        width 100px!important;
        letter-spacing: 0;
        margin-left 30px;
    /deep/ .phone-label .el-form-item__content
        margin-left 105px;
    /deep/ .check-btnbox> div
        margin-left 20px!important
    .check-btnbox .el-button
        background: #7DBFBC;
        border-radius: 4px;
        color: #fff;
    .club-number
        width 100%;
        text-align left;
        margin-top: 50px;
        box-sizing: border-box;
        padding-left: 30px;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #2C3645;
        letter-spacing: 0;
        > span
            font-weight: bolder;
    .club-while
        width 100%;
        padding-left 30px;
        box-sizing: border-box; 
        > h3
            text-align left;
            text-indent: 10px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #002241;
        > .first-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            box-sizing border-box;
            padding-left 10px;
            height 50px;
            position: relative;
            background: #E0F0F0;
            > div
                margin-right: 30px;
                position relative;
                box-sizing border-box;
                cursor: pointer;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #717985;
                letter-spacing: 0;
                > span
                    position absolute;
                    bottom -10px;
                    left 50%;
                    width 20px;
                    height 5px;
                    margin-left -10px;
                    background-color #ed1941;
                    border-radius: 2px;
                > .delclass
                    position absolute;
                    top: -10px;
                    right: -15px;
                    width 17px;
                    height 17px;
            > div:first-of-type
                font-size 16px;
                font-family: PingFangSC-Medium;
                color: #2C3645;
                letter-spacing: 0;
            > div.active
                font-weight: bolder;
                color: #2C3645
            .editclass1
                position absolute;
                right 10px;
                top: 20px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #1B8668;
                text-decoration: underline
            .delete
                position absolute;
                right 45px;
                top: 20px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #FF4E4E;
                text-decoration: underline
        > .second-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            box-sizing border-box;
            padding-left 10px;
            height 50px;
            position: relative;
            background: #F8FCFC;
            > div
                margin-right: 30px;
                position relative;
                box-sizing border-box;
                cursor: pointer;
                font-family: PingFangSC-Semibold;
                font-size: 16px;
                color: #717985;
                letter-spacing: 0;
                > span
                    position absolute;
                    bottom -10px;
                    left 50%;
                    width 20px;
                    height 5px;
                    margin-left -10px;
                    background-color #ed1941;
                    border-radius: 2px;
                > .delclass
                    position absolute;
                    top: -10px;
                    right: -15px;
                    width 17px;
                    height 17px;
            > div:first-of-type
                font-size 16px;
                font-family: PingFangSC-Medium;
                color: #2C3645;
                letter-spacing: 0;
            > div.active
                font-weight: bolder;
                color: #2C3645
            .editclass1
                position absolute;
                right 10px;
                top: 20px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #1B8668;
                text-decoration: underline
            .delete
                position absolute;
                right 45px;
                top: 20px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #FF4E4E;
                text-decoration: underline
    .club-list
        padding-left: 30px;
        padding-right: 30px;
        margin-top 12px;
        box-sizing: border-box;
    /deep/ .headerclass
        background: #F5F6FA;   
    /deep/ .check
        color: #7DBFBB;
        font-size: 14px;
        font-weight: bolder;
        margin-left 0!important;
        text-decoration: underline;
        cursor: pointer;
    .block
        margin-top 50px
    .fensisty
        text-decoration underline;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #1B8668;
        cursor pointer;
</style>
