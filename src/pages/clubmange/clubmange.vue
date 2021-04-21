<template>
    <div class="container">
        <div class="club-search">
            <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="phone-ruleForm">
                <el-form-item class="phone-label" label="手机号" prop="phone">
                    <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="phone-label" label="俱乐部名称" prop="clubname">
                    <el-input type="text" v-model="ruleForm.clubname" autocomplete="off"></el-input>
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
                <div class="class1box" :style="'width: '+domWidth+'px'">
                    <div :class="currentFirstclass == -1 ? 'active': ''" @click="changeClass1('',-1)">全部<span v-if="currentFirstclass == -1"></span></div>
                    <div :class="currentFirstclass == index ? 'active': ''" v-for="(item,index) in firstClass1" :key="`a${index}`" @click="changeClass1(item.id,index)">{{item.name}}
                        <span v-if="currentFirstclass == index"></span>
                        <img class="delclass" v-if="delClassimg1" src="@/assets/del.png" alt="" @click.stop="delClass(item.id)">
                    </div>
                </div>
                <div class="delete" @click="candel1">{{deltext1}}</div>
                <div class="editclass1" @click="addClass">新增</div>
            </div>
            <div class="second-class">
                <div>二级分类</div>
                <div class="class2box" :style="'width: '+domWidth+'px'">
                    <div :class="currentSecondclass == -1 ? 'active': ''" @click="changeClass2('',-1)">全部<span v-if="currentSecondclass == -1"></span></div>
                    <div :class="currentSecondclass == index ? 'active': ''" v-for="(item,index) in firstClass2" :key="`a${index}`" @click="changeClass2(item.id,index)">{{item.name}}
                        <span v-if="currentSecondclass == index"></span>
                        <img class="delclass" v-if="delClassimg2"  src="@/assets/del.png" alt="" @click.stop="delClass2(item.id)">
                    </div>
                </div>
                <div class="delete" @click="candel2">{{deltext2}}</div>
                <div class="editclass1" @click="addClass2">新增</div>
            </div>
        </div>
        <div class="club-number">
            俱乐部总数 <span>{{total}}个</span>
        </div>
        <div class="club-list">
            <el-table 
                :header-row-class-name="headerclass"
                :header-cell-class-name="headerclass"
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column prop="id" label="俱乐部ID"></el-table-column>
                <el-table-column prop="avatar" label="头像">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" class="td-header" width="50" height="50" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="俱乐部名称"></el-table-column>
                <el-table-column prop="topicName" label="一级分类"></el-table-column>
                <el-table-column prop="topicName2" label="二级分类"></el-table-column>
                <el-table-column prop="createName" label="管理员"></el-table-column>
                <el-table-column prop="createTime" label="创建时间" width="150"></el-table-column>
                <el-table-column prop="roomCount" label="房间次数"></el-table-column>
                <!-- <el-table-column prop="name" label="在线时长"></el-table-column> -->
                <el-table-column prop="fansCount" label="粉丝">
                    <template slot-scope="scope">
                        <span class="fensisty" @click="goFensi(scope.row.fansCount)">{{scope.row.fansCount}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="roomInstructions" label="简介"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="check" @click="handleEdit(scope.$index, scope.row)">查看详情</span>
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
  import { getClub ,getFirstTopic ,getSecondTopic,addTopic,delTopic} from '@/api/club/club.js'
  import timestr from '@/utils/timestamp.js'
  export default{
    name: 'clubmange',
    data() {
        return {
            ruleForm: {
                phone: '',
                clubname: ''
            },
            firstClass1: [],
            firstClass2: [],
            delClassimg1: false,
            delClassimg2: false,
            deltext1: '删除',
            deltext2: '删除',
            tableData: [],
            currentFirstclass: -1,
            currentSecondclass: -1,
            headerclass: 'headerclass',
            total: 0,
            pageNo: 1,
            pageSize: 10,
            // 一级分类
            parentTopicId: '',
            // 二级分类
            topicId: '',
            classstyle: '',
            domWidth: '',
        }
    },
    beforeCreate () {
        
    },
    created() {
        this.$nextTick(function () {
            let screenWidth = this.$store.state.common.screenWidth;
            let domWidth = screenWidth -320 -250;
            this.domWidth = domWidth;
            this.classstyle = `width: ${domWidth}px!important;`;
            console.log(this.domWidth)
        })
        // 获取一级分类
        this.getFirsttitle()
        // 获取二级分类
        this.getSecondtitle('')
        // 获取俱乐部列表
        this.getList();
    },
    methods: {
        timestr,
        changeClass1(id,index){
            this.currentFirstclass = index;
            this.getSecondtitle(id)
            this.parentTopicId = id;
        },
        changeClass2(id,index){
            this.topicId = id;
            this.currentSecondclass = index;
        },
        submitForm(str){
            this.$refs[str].validate((flag) => {
                if(flag){
                    this.getList();
                }
            })
        },
        // 去粉丝页面
        goFensi(id){
            console.log(id)
        },
        // 去俱乐部详情页
        handleEdit(index, row){
            this.$store.commit('club/setClubdata', row)
            this.$router.push({
                name: 'clubdetail',
                path: 'clubdetail'
            })
        },
        handleSizeChange(val){
            console.log('切换每页信息数量')
            this.pageSize = val;
            this.getList();
        },
        handleCurrentChange(val){
            console.log('切换页码')
            this.pageNo = val;
            this.getList();
        },
        // 删除一级分类
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
        // 删除二级分类
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
        // 确认删除一级分类
        delClass(id){
            this.$confirm('是否删除该一级分类，如果删除，所有该一级分类下的二级分类都会被删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.delClassname(1,id)
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        // 添加一级分类
        addClass(){
            this.delClassimg1 = false;
            this.$prompt('请输入分类', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                // inputType: 'textarea'
                    }).then(({ value }) => {
                        if(value){
                            this.addClassname(1,value);
                        }else{
                            this.$message('未填写分类名称');     
                        }
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
            });
        },
        // 添加分类接口
        addClassname(type,name){
            let data = {
                name: name,
                sort: '1'
            }
            if(type == 1){
                data.parentId = 0;
            }else{
                data.parentId = this.parentTopicId
            }
            if(!name){
                return;
            }
            addTopic(data).then(res =>{
                if(res.code == 200){
                    if(this.parentTopicId){
                        this.currentSecondclass = -1,
                        this.getSecondtitle(this.parentTopicId);
                    }else{
                        this.currentFirstclass = -1,
                        this.getFirsttitle();
                    }
                    this.$message({
                        type: 'success',
                        message: '添加成功' 
                    });
                }
            })
        },
        // 删除分类接口
        delClassname(type,id){
            let data = {
                id: id,
            }
            if(!id){
                return;
            }
            delTopic(data).then(res =>{
                if(res.code == 200){
                    if(type == 1){
                        this.currentFirstclass = -1,
                        this.getFirsttitle();
                        this.currentSecondclass = -1,
                        this.getSecondtitle('');
                    }else{
                        this.currentSecondclass = -1,
                        this.getSecondtitle(this.parentTopicId);
                    }
                    this.$message({
                        type: 'success',
                        message: '删除成功' 
                    });
                }
            })
        },

        // 添加二级分类
        addClass2(){
            this.delClassimg1 = false;
            this.$prompt('请输入分类', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                    }).then(({ value }) => {
                        if(value){
                            if(this.parentTopicId){
                                this.addClassname(2,value);
                            }else{
                                this.$message('添加二级分类需要先选择一级分类！');  
                            }
                        }else{
                            this.$message('未填写分类名称');     
                        }
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });       
            });
        },
        // 确认删除二级分类
        delClass2(id){
            this.$confirm('是否删除该分类?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.delClassname(2,id)
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
        },
        // 获取俱乐部列表
        getList(){
            let data = {
                name: this.ruleForm.clubname,
                phone: this.ruleForm.phone,
                pageNo: this.pageNo,
                pageSize: this.pageSize,
                parentTopicId: this.parentTopicId,
                topicId: this.topicId,
            }
            getClub(data).then(res =>{
                if(res.code == 200){
                    let tableData = res.data;
                    for(let i in tableData){
                        tableData[i].createTime = this.timestr(tableData[i].createTime); 
                    }
                    this.tableData = tableData;
                    this.total = res.total;
                }
            })
        },
        //获取一级标题
        getFirsttitle(){
            getFirstTopic().then(res =>{
                if(res.code == 200){
                    this.firstClass1 = res.data;
                }
            })
        },
        //获取二级标题
        getSecondtitle(id){
            let data = {
                parentId: id
            }
            getSecondTopic(data).then(res =>{
                if(res.code == 200){
                    this.firstClass2 = res.data;
                }
            })
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
    /deep/ .phone-label .el-form-item__label
        font-family: PingFangSC-Semibold;
        font-size: 16px!important;
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
            align-items baseline;
            box-sizing border-box;
            padding-left 10px;
            position: relative;
            background: #E0F0F0;
            > .class1box
                display: flex;
                justify-content flex-start;
                align-items center;
                flex-wrap: wrap;
                // width: 750px;
                > div
                    height: 100%;
                    line-height: 50px;
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
                        bottom 5px;
                        left 50%;
                        width 20px;
                        height 5px;
                        margin-left -10px;
                        background-color #ed1941;
                        border-radius: 2px;
                    > .delclass
                        position absolute;
                        top: 5px;
                        right: -15px;
                        width 17px;
                        height 17px;
            > div:first-of-type
                font-size 16px;
                font-family: PingFangSC-Medium;
                color: #2C3645;
                letter-spacing: 0;
                width: 85px;
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
                text-decoration: underline;
                cursor pointer;
            .delete
                position absolute;
                right 45px;
                top: 20px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #FF4E4E;
                text-decoration: underline
                cursor pointer;
        > .second-class
            width 100%;
            display flex;
            justify-content flex-start;
            align-items baseline;
            box-sizing border-box;
            padding-left 10px;
            position: relative;
            background: #F8FCFC;
            > .class2box
                display: flex;
                justify-content flex-start;
                align-items center;
                flex-wrap: wrap;
                // width: 750px;
                > div
                    height: 100%;
                    line-height: 50px;
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
                        bottom 5px;
                        left 50%;
                        width 20px;
                        height 5px;
                        margin-left -10px;
                        background-color #ed1941;
                        border-radius: 2px;
                    > .delclass
                        position absolute;
                        top: 5px;
                        right: -15px;
                        width 17px;
                        height 17px;
            > div:first-of-type
                font-size 16px;
                font-family: PingFangSC-Medium;
                color: #2C3645;
                letter-spacing: 0;
                width: 85px;
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
                text-decoration: underline;
                cursor pointer;
            .delete
                position absolute;
                right 45px;
                top: 20px;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #FF4E4E;
                text-decoration: underline;
                cursor pointer;
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
