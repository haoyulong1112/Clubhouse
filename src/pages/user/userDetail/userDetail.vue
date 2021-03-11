<template>
    <div class="container">
        <div class="user-message">
            <div class="user-box">
                <el-row :gutter="10">
                    <el-col :span="2">
                        <div class="grid-content bg-purple">
                            <div class="user-header">
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="grid-content bg-purple">
                            <table class="user-data">
                                <thead>
                                    <tr>
                                        <th>编号ID</th>
                                        <th>昵称</th>
                                        <th>手机号</th>
                                        <th>邮箱</th>
                                        <th>加入时间</th>
                                        <th>最后登录时间</th>
                                        <th>在线时长</th>
                                        <th>开设房间</th>
                                        <th>关注的俱乐部</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{userData.id}}</td>
                                        <td>{{userData.name}}</td>
                                        <td>{{userData.phone}}</td>
                                        <td>{{userData.email}}</td>
                                        <td>{{userData.enterTime}}</td>
                                        <td>{{userData.logintime}}</td>
                                        <td>{{userData.timelone}}</td>
                                        <td>{{userData.room}}</td>
                                        <td>{{userData.club}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="user-invite">
                                <div class="invite-msg">
                                    <span>邀请人</span>
                                    <span>李逍遥</span>
                                </div>
                                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg" alt="">
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <!-- <div class="user-header">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg" alt="">
                </div> -->
                <!-- <table class="user-data">
                    <thead>
                        <tr>
                            <th>编号ID</th>
                            <th>昵称</th>
                            <th>手机号</th>
                            <th>邮箱</th>
                            <th>加入时间</th>
                            <th>最后登录时间</th>
                            <th>在线时长</th>
                            <th>开设房间</th>
                            <th>关注的俱乐部</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{userData.id}}</td>
                            <td>{{userData.name}}</td>
                            <td>{{userData.phone}}</td>
                            <td>{{userData.email}}</td>
                            <td>{{userData.enterTime}}</td>
                            <td>{{userData.logintime}}</td>
                            <td>{{userData.timelone}}</td>
                            <td>{{userData.room}}</td>
                            <td>{{userData.club}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="user-invite">
                    <div class="invite-msg">
                        <span>邀请人</span>
                        <span>李逍遥</span>
                    </div>
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg" alt="">
                </div> -->
            </div>
            <div class="userdetail-info">
                <div>简介</div>
                <div>
                    可以为空<br />
                    可以市一句话<br />
                    可以是段落<br />
                </div>
            </div>
        </div>
        <div class="list-box">
            <div class="tab">
                <div :class=" currentTab == 1 ? 'tab-item active': 'tab-item'" @click="changeTab(1)">关注的人 <span>268人</span></div>
                <div :class=" currentTab == 2 ? 'tab-item active': 'tab-item'" @click="changeTab(2)">粉丝 <span>2234人</span></div>
                <div :class=" currentTab == 3 ? 'tab-item active': 'tab-item'" @click="changeTab(3)">关注的俱乐部 <span>10个</span></div>
                <div :class=" currentTab == 4 ? 'tab-item active': 'tab-item'" @click="changeTab(4)">邀请的人 <span>232人</span></div>
            </div>
            <div class="tab-content">  
                <div class="user-box">  
                    <el-table v-if="currentTab == 1 ? true : false" class="list-table"
                        :data="tableData1"
                        highlight-current-row
                        :cell-class-name="tdlist"
                        style="width: 100%">
                        <el-table-column prop="imgurl" label="头像" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.imgurl" class="td-header" width="50" height="50" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column prop="id" label="编号ID" width="120"></el-table-column>
                        <el-table-column prop="name" label="昵称" width="120"></el-table-column>
                        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
                        <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
                        <el-table-column prop="enterTime" label="加入时间" width="120"></el-table-column>
                        <el-table-column prop="logintime" label="最后登录时间" width="120"></el-table-column>
                        <el-table-column prop="attion" label="关注的人" width="120"></el-table-column>
                        <el-table-column prop="fensi" label="粉丝" width="120"></el-table-column>
                        <el-table-column prop="club" label="关注的俱乐部" width="120"></el-table-column>
                        <el-table-column prop="timelone" label="在线时长" width="120"></el-table-column>
                        <el-table-column prop="room" label="开设房间" width="120"></el-table-column>
                    </el-table>
                    <el-table v-if="currentTab == 2 ? true : false" class="list-table"
                        :data="tableData2"
                        highlight-current-row
                        :cell-class-name="tdlist"
                        style="width: 100%">
                        <el-table-column prop="imgurl" label="头像" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.imgurl" class="td-header" width="50" height="50" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column prop="id" label="编号ID" width="120"></el-table-column>
                        <el-table-column prop="name" label="昵称" width="120"></el-table-column>
                        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
                        <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
                        <el-table-column prop="enterTime" label="加入时间" width="120"></el-table-column>
                        <el-table-column prop="logintime" label="最后登录时间" width="120"></el-table-column>
                        <el-table-column prop="attion" label="关注的人" width="120"></el-table-column>
                        <el-table-column prop="fensi" label="粉丝" width="120"></el-table-column>
                        <el-table-column prop="club" label="关注的俱乐部" width="120"></el-table-column>
                        <el-table-column prop="timelone" label="在线时长" width="120"></el-table-column>
                        <el-table-column prop="room" label="开设房间" width="120"></el-table-column>
                    </el-table>
                    <el-table v-if="currentTab == 3 ? true : false" class="list-table"
                        :data="tableData3"
                        highlight-current-row
                        :cell-class-name="tdlist"
                        style="width: 100%">
                        <el-table-column prop="imgurl" label="头像" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.imgurl" class="td-header" width="50" height="50" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column prop="id" label="编号ID" width="120"></el-table-column>
                        <el-table-column prop="name" label="昵称" width="120"></el-table-column>
                        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
                        <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
                        <el-table-column prop="enterTime" label="加入时间" width="120"></el-table-column>
                        <el-table-column prop="logintime" label="最后登录时间" width="120"></el-table-column>
                        <el-table-column prop="attion" label="关注的人" width="120"></el-table-column>
                        <el-table-column prop="fensi" label="粉丝" width="120"></el-table-column>
                        <el-table-column prop="club" label="关注的俱乐部" width="120"></el-table-column>
                        <el-table-column prop="timelone" label="在线时长" width="120"></el-table-column>
                        <el-table-column prop="room" label="开设房间" width="120"></el-table-column>
                    </el-table>
                    <el-table v-if="currentTab == 4 ? true : false" class="list-table"
                        :data="tableData4"
                        highlight-current-row
                        :cell-class-name="tdlist"
                        style="width: 100%">
                        <el-table-column prop="imgurl" label="头像" width="120">
                            <template slot-scope="scope">
                                <img :src="scope.row.imgurl" class="td-header" width="50" height="50" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column prop="id" label="编号ID" width="120"></el-table-column>
                        <el-table-column prop="name" label="昵称" width="120"></el-table-column>
                        <el-table-column prop="phone" label="手机号" width="120"></el-table-column>
                        <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
                        <el-table-column prop="enterTime" label="加入时间" width="120"></el-table-column>
                        <el-table-column prop="logintime" label="最后登录时间" width="120"></el-table-column>
                        <el-table-column prop="attion" label="关注的人" width="120"></el-table-column>
                        <el-table-column prop="fensi" label="粉丝" width="120"></el-table-column>
                        <el-table-column prop="club" label="关注的俱乐部" width="120"></el-table-column>
                        <el-table-column prop="timelone" label="在线时长" width="120"></el-table-column>
                        <el-table-column prop="room" label="开设房间" width="120"></el-table-column>
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

    </div>
</template>

<script>
    export default{ 
        name: 'userDetail',
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
                userData: 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '王小虎',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }
                ,
                tableData1: [
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '王小虎',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    },
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '王小虎',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '王小虎',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '王小虎',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '王小虎',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '王小虎',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }],    
                tableData2: [
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '张三',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    },
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '张三',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '张三',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '张三',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '张三',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '张三',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }],
                tableData3: [
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '李四',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    },
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '李四',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '李四',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '李四',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '李四',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '李四',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }],
                tableData4: [
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '于海',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    },
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '于海',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '于海',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '于海',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '于海',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }, 
                    {
                        id: '12',
                        imgurl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg',
                        name: '于海',
                        phone: '17839193022',
                        email: '875720142@qq.com',
                        enterTime: '2021-03-2',
                        logintime: '2021-03-2',
                        timelone: '2021-03-23',
                        attion: '234',
                        fensi: '3444',
                        room: '24',
                        club: '102',
                    }],
                tdlist: 'tdlist',
                thnonebober:'thnonebober',
                tdbgc: 'tdbgc',
                total: 100,
                currentPage: 1,
                pageSize: 10,
                currentTab: 1,
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
        background-color #F5F7F9;
    .header-table
        width 100%;
        height 112px;     
        padding 0 10px!important;
    .tdbgc
        padding 24px 0!important;
        border-bottom: none!important;
    .list-table
        padding 0 20px!important;
    .check
        background-color: #7DBFBB!important;
        color: #fff;
    .block
        margin-top 20px
        margin-bottom 30px;
    /deep/  .thnonebober
                border-bottom: none!important;
    .user-message
        width 100%;
        padding 26px 20px 2px;;
        box-sizing: border-box;
        margin-bottom 30px;
        background-color #fff;
        border-radius: 10px;
        box-sizing: border-box;
        > .user-box
            width 100%;
            height: 112px;
            // display flex;
            // align-items center;
            // justify-content: flex-start;
            // margin-bottom: 30px;
            // position: relative;
            > .user-data
                height: 112px;
                margin-left: 10px;
                > thead th
                    font-family: PingFangSC-Medium;
                    font-size: 16px;
                    color: #002241;
                    letter-spacing: 0;
                    line-height: 16px;
                    padding: 20px 20px;
                    box-sizing: border-box;
                > tbody td
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #717985;
                    text-align: center;
                    line-height: 14px;
            // box-shadow 
        > .userdetail-info
            width: 100%;
            height: 154px;
            background: #F5F4F5;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
            > div:first-of-type
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #002241;
                letter-spacing: 0;
                text-align: left;
                line-height: 16px;
                margin: 20px 25px;
            > div:last-of-type
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #002241;
                letter-spacing: 0;
                line-height: 26px;
                text-align: left;
                padding-left: 25px;
    .user-header
        width 100px;
        height 100px;
        // margin-left .20px;
        >img 
            width 100%;
            height 100%;
            border-radius: 50%; 
    .user-invite
        width 238px;
        height 124px;
        position: absolute;
        display flex;
        justify-content center;
        align-items center;
        background: #F5F4F5;
        border-radius: 70px;
        right 20px;
        top: 0;
        > img 
            width 80px;
            height 80px;
            border-radius 50%;   
            margin-left 30px
        > div   
            display flex;
            justify-content flex-start;
            flex-direction column;
            > span  
                font-size 16px 
                font-family: PingFangSC-Medium;
                color: #002241;
            > span:last-of-type
                margin-top 40px
                color: #1B8668;
    .list-box
        width 100%;
        .tab
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            margin-bottom 20px;
            > .tab-item 
                // width 2.00px;
                height 44px;
                background-color #fff;
                text-align: center;
                margin-right 30px;
                font-weight bolder;
                border-radius 4px; 
                cursor pointer;
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #9FA7B9;
                letter-spacing: 0;
                box-sizing: border-box;
                padding 12px 2px;
            > .tab-item.active
                background-color #7DBFBB;
                color: #fff;
        .tab-content
            width 100%;
            background-color #fff;
            > .user-box
                width 100%;
                display flex;
                align-items center;
        .tdlist .td-header
            border-radius 50%;
    .block
        background-color: #fff;
</style>
