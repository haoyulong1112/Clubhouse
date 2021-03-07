<template>
    <div class="container">
        <div class="user-message">
            <div class="user-box">
                <div class="user-header">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg" alt="">
                </div>
                <el-table class="header-table"
                    :data="userData"
                    :header-cell-class-name="thnonebober"
                    :cell-class-name="tdbgc">
                    <el-table-column prop="id" label="编号ID" width="80"></el-table-column>
                    <el-table-column prop="name" label="昵称" width="120"></el-table-column>
                    <el-table-column prop="phone" label="手机号" width="140"></el-table-column>
                    <el-table-column prop="email" label="邮箱" width="160"></el-table-column>
                    <el-table-column prop="enterTime" label="加入时间" width="140"></el-table-column>
                    <el-table-column prop="logintime" label="最后登录时间" width="140"></el-table-column>
                    <el-table-column prop="timelone" label="在线时长" width="140"></el-table-column>
                    <el-table-column prop="room" label="开设房间" width="140"></el-table-column>
                    <el-table-column prop="club" label="关注的俱乐部" width="140"></el-table-column>
                </el-table>
                <div class="user-invite">
                    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg" alt="">
                    <div class="invite-msg">
                        <span>邀请人</span>
                        <span>李逍遥</span>
                    </div>
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
                    height="850"
                    style="width: 100%">
                    <el-table-column prop="imgurl" label="头像" width="120">
                        <template slot-scope="scope">
                            <img :src="scope.row.imgurl" class="td-header" width="100" height="100" alt="">
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
                    height="850"
                    style="width: 100%">
                    <el-table-column prop="imgurl" label="头像" width="120">
                        <template slot-scope="scope">
                            <img :src="scope.row.imgurl" class="td-header" width="100" height="100" alt="">
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
                    height="850"
                    style="width: 100%">
                    <el-table-column prop="imgurl" label="头像" width="120">
                        <template slot-scope="scope">
                            <img :src="scope.row.imgurl" class="td-header" width="100" height="100" alt="">
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
                    height="850"
                    style="width: 100%">
                    <el-table-column prop="imgurl" label="头像" width="120">
                        <template slot-scope="scope">
                            <img :src="scope.row.imgurl" class="td-header" width="100" height="100" alt="">
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
                userData: [
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
                ],
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
<style lang="stylus" scope>
    .container
        width 100%;
        // height 100%;
        background-color #F5F7F9;
        overflow hidden;
    .header-table
        width 100%;
        height 140px;     
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
    .thnonebober
        border-bottom: none!important;
    .user-message
        width 100%;
        padding 10px 20px;
        box-sizing: border-box;
        margin-bottom 30px;
        > .user-box
            width 100%;
            display flex;
            align-items center;
            border-radius 80px; 
            background-color #fff;
            // box-shadow 
    .user-header
        width 100px;
        height 100px;
        margin-left 20px;
        >img 
            width 100%;
            height 100%;
            border-radius: 50%; 
    .user-invite
        width 200px;
        height 100px;
        display flex;
        justify-content center;
        align-items center;
        background-color #e1f2ed;
        border-radius: 30px;
        margin-right 20px;
        > img 
            width 80px;
            height 80px;
            border-radius 50%;   
            margin-right 20px
        > div   
            display flex;
            justify-content flex-start;
            flex-direction column;
            > span  
                font-weight bolder;
                font-size 16px 
            > span:first-of-type
                margin-bottom 10px
    .list-box
        width 100%;
        .tab
            width 100%;
            display flex;
            justify-content flex-start;
            align-items center;
            margin-bottom 20px;
            > .tab-item 
                width 200px;
                height 50px;
                background-color #fff;
                text-align: center;
                line-height 50px;
                margin-right 30px;
                font-weight bolder;
                border-radius 20px; 
                cursor pointer;
            > .tab-item.active
                background-color #7DBFBB;
        .tab-content
            width 100%;
            > .user-box
                width 100%;
                display flex;
                align-items center;
                background-color #fff;
        .tdlist .td-header
            border-radius 50%;

</style>
