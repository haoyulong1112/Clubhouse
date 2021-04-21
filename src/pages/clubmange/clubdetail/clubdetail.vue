<template>
    <div class="container">
        <div class="club-message">
            <div class="club-box">
                <table class="club-data">
                    <thead>
                        <tr>
                            <th>俱乐部ID</th>
                            <th>头像</th>
                            <th>俱乐部名称</th>
                            <th>一级分类</th>
                            <th>二级分类</th>
                            <th>创建时间</th>
                            <th>房间次数</th>
                            <!-- <th>在线时长</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{userData.id}}</td>
                            <td><img width="50" height="50" :src="userData.avatar" alt=""></td>
                            <td>{{userData.name}}</td>
                            <td>{{userData.topicName}}</td>
                            <td>{{userData.topicName2}}</td>
                            <td>{{userData.createTime}}</td>
                            <td>{{userData.roomCount}}</td>
                            <!-- <td>{{userData.timelone}}</td> -->
                        </tr>
                    </tbody>
                </table>
                <div class="club-invite">
                    <img :src="userData.createUrl" alt="">
                    <div class="invite-msg">
                        管理员：{{userData.createName}}
                    </div>
                </div>
            </div>
            <div class="club-tag">
                <div class="tag-title">标签</div>
                <div class="tag-tags">
                    <div v-for="(item,index) in userData.onlytags" :key="`c${index}`">{{item}}</div>
                </div>
            </div>
            <div class="clubdetail-info">
                <div>简介</div>
                <div>
                    {{userData.roomInstructions}}
                </div>
            </div>
        </div>
        <div class="club-fans">
            <div class="fansbtn">粉丝 {{total}}人</div>
            <div class="user-box">  
                <el-table class="list-table"
                    :data="tableData"
                    highlight-current-row
                    :cell-class-name="tdlist"
                    style="width: 100%">
                    <el-table-column prop="headPic" label="头像" width="120">
                        <template slot-scope="scope">
                            <img :src="scope.row.headPic" class="td-header" width="50" height="50" alt="">
                        </template>
                    </el-table-column>
                    <el-table-column prop="id" label="编号ID" width="120"></el-table-column>
                    <el-table-column prop="nikeName" label="昵称" width="120"></el-table-column>
                    <el-table-column prop="cellPhone" label="手机号" width="120"></el-table-column>
                    <el-table-column prop="createTime" label="加入时间" width="150"></el-table-column>
                    <el-table-column prop="offLineTime" label="最后登录时间" width="150"></el-table-column>
                    <el-table-column prop="followSize" label="关注的人" width="120"></el-table-column>
                    <el-table-column prop="fansSize" label="粉丝" width="120"></el-table-column>
                    <el-table-column prop="followClubSize" label="关注的俱乐部" width="120"></el-table-column>
                    <el-table-column prop="totalDuration" label="在线时长" width="120"></el-table-column>
                    <el-table-column prop="createClubCount" label="开设房间"></el-table-column>
                </el-table>
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
    </div>
</template>
<script>
  import { clubDetail } from '@/api/club/club.js'
  import timestr from '@/utils/timestamp.js'
    export default {
        name: 'clubdetail',
        data() {
            return {
                userData:{},
                tableData: [], 
                tdlist: 'tdlist',
                total: 0,
                currentPage: 1,
                pageSize: 10,
            }
        },
        created() {
            this.userData = this.$store.state.club.currentClubdata;
            this.userData['onlytags'] = this.userData.title ? this.userData.title.split(',') : []
            this.getclubDetail();
        },
        methods: {
            timestr,
            handleSizeChange(val){
                this.pageSize = val;
                this.clubDetail();
            },
            handleCurrentChange(val){
                this.currentPage = val;
                this.clubDetail();
            },
            // 获取俱乐部详情
            getclubDetail(){
                let data = {
                    pageNo: this.currentPage,
                    pageSize: this.pageSize,
                    id: this.userData.id
                }
                clubDetail(data).then(res =>{
                    if(res.code == 200 && res.data){
                        let tableData = res.data;
                        for(let i in tableData){
                            tableData[i].createTime = this.timestr(tableData[i].createTime); 
                            tableData[i].offLineTime = this.timestr(tableData[i].offLineTime); 
                        }
                        this.tableData = tableData;
                        this.total = res.total;
                    }
                }).catch(err =>{
                    this.$message.error(err.msg);
                })
            }
        },
    }
</script>
<style lang="stylus" scoped>
    .container
        width 100%;
        // height: 100%;
    .club-message
        width 100%;
        padding 20px;
        box-sizing: border-box;
        margin-bottom 30px;
        background-color #fff;
        border-radius: 10px;
        box-sizing: border-box;
        overflow-x: auto;
        > .club-box
            width 100%;
            overflow-x: auto;
            padding-bottom: 10px;
            display flex;
            align-items center;
            justify-content: flex-start;
            margin-bottom: 20px;
            > .club-data
                width: 986px;
                border-collapse:collapse;
                > thead
                    background: #E0F0F0;
                > thead tr
                    background: #E0F0F0;
                > thead th
                    border: none;
                    background: #E0F0F0;
                    font-family: PingFangSC-Medium;
                    font-size: 16px;
                    color: #002241;
                    letter-spacing: 0;
                    line-height: 16px;
                    padding: 20px;
                    box-sizing: border-box;
                > tbody td
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #717985;
                    text-align: center;
                    line-height: 14px;
                    padding: 20px;
            > .club-invite
                    width 280px;
                    height 124px;
                    padding: 12px 20px;
                    box-sizing: border-box;
                    display flex;
                    justify-content center;
                    align-items center;
                    background: #F5F4F5;
                    border-radius: 70px;
                    margin-left 70px;
                    > img 
                        width 72px;
                        height 72px;
                        border-radius 50%;   
                        margin-left 10px
                    > div   
                        // width 112px;
                        margin-left: 25px
                        font-size 16px 
                        font-family: PingFangSC-Medium;
                        color: #002241;
                        color: #1E1F20;
                        letter-spacing: -0.54px;
            // box-shadow 
        > .clubdetail-info
            width: 100%;
            margin-top 20px;
            overflow: hidden;
            // margin-bottom: 20px;
            > div:first-of-type
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #002241;
                letter-spacing: 0;
                text-align: left;
                line-height: 16px;
                margin: 20px 32px;
            > div:last-of-type
                height: 163px;
                background: #F5F4F5;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #002241;
                letter-spacing: 0;
                line-height: 26px;
                text-align: left;
                padding-left: 25px;
                padding-top 10px;
                border-radius: 10px;
        > .club-tag
            width 100%;
            text-align left;
            > .tag-title
                font-size: 18px;
                color: #002241;
                letter-spacing: 0;
                padding-left 32px;
                margin-bottom 10px;
            > .tag-tags
                width 100%;
                display flex;
                justify-content flex-start;
                align-items center;
                background: #F8FAFB;
                height 30px;
                > div
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #2C3645;
                    letter-spacing: 0;
                    line-height: 16px;
                    margin-left 30px;
     
    .club-fans
        width 100%;
        background-color #fff;
        box-sizing: border-box;
        padding 30px;
        text-align left;
        > .fansbtn
            background: #7DBFBC;
            border-radius: 4px;
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: 0;
            display inline-block;
            padding 12px 20px;
        > .user-box
            width 100%;
            display flex;
            align-items center;   
            margin-top 30px;
    
    .tdlist .td-header
        border-radius 50%;
    /deep/ .block
        margin-top 30px;
</style>
