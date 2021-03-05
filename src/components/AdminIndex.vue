<template>
    <el-container>
      <!-- 页面顶部 -->
        <el-header>
            <div class="index-title" @click="goIndex">ClubHouse后台管理系统</div>
            <el-menu class="mennu-mine" :router="true" mode="horizontal" background-color="#FFF" text-color="#7DBFBB">
                <el-submenu index="1" class="menuminebox">
                    <template slot="title"><i class="el-icon-user"></i></template>
                    <el-menu-item index="1-1">郝玉龙</el-menu-item>
                    <el-menu-item @click="backLogin">退出登录</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header>
        <el-container>
        <!-- 页面左侧菜单 -->
            <el-aside>
              <el-menu class="el-sidebox" :router="true" :unique-opened="true" background-color="#4D7175" text-color="#E0F0F0" active-text-color="#E0F0F0">
                <!-- 开启菜单中的Router=true后 点击菜单会把index作为路由跳转路径 systemConfig-->
                 <el-menu-item index="/admin/user">
                   <i class="el-icon-user"></i>用户管理
                 </el-menu-item>
                 <el-menu-item index="/admin/importPhone">
                   <i class="el-icon-mobile-phone"></i>手机号导入
                 </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>系统配置</span>
                    </template>
                    <el-menu-item class="menuitems" index="/admin/product">
                        产品管理
                    </el-menu-item>
                    <el-menu-item class="menuitems" index="/admin/client">
                        客户管理
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>系统配置</span>
                    </template>
                    <el-menu-item class="menuitems" index="/admin/product">
                        产品管理
                    </el-menu-item>
                    <el-menu-item  class="menuitems" index="/admin/client">
                        客户管理
                    </el-menu-item>
                </el-submenu>
                 <el-menu-item index="/admin/product">
                   <i class="el-icon-setting"></i>产品管理
                 </el-menu-item>
                 <el-menu-item index="/admin/client">
                   <i class="el-icon-setting"></i>客户管理
                 </el-menu-item>
              </el-menu>
            </el-aside>
            <el-main>
              <!-- 下面内容是中间空白区域的内容，你可以自定义 -->
                <div class="indexContent" v-if="routerChange">
                    <h3>欢迎来到ClubHouse</h3>
                </div>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    name: 'AdminIndex',
    data() {
        return {
            routerChange: false
        }
    },
    created(){
    },
    watch:{
        $route:{
            immediate:true,
            handler(val,oldval){
                console.log(this.routerChange);
                if(val && val.name == "AdminIndex"){
                    this.routerChange = true;
                }else{
                    this.routerChange = false;
                }
            },
            // 深度观察监听
            deep: true
        }
    },
    methods: {
        goIndex() {
            if(!this.routerChange){
                this.$router.push({
                    name: 'AdminIndex',
                    path: '/admin'
                });
            }
        },
        backLogin(){
            console.log(this.$store.state.user.username);
            console.log(this.$store.state.user.password);
            this.$store.commit('user/updateUsername','')
            this.$store.commit('user/updatePassword', '')
            this.$router.push({
                name: 'Login'
            });
            console.log(this.$store.state.user.username);
            console.log(this.$store.state.user.password);
        }
    },
}
</script>
<style lang="stylus">
.el-header {
    background-color: #FFF;
    color: #fff;
    line-height: 60px;
    display flex;
    justify-content space-between;
    align-items center;
    padding-left 0!important;
}
.el-container 
    width 100%;
    height 100%;
.index-title
    width 200px;
    background-color #7DBFBB
    display inline-block;
    cursor: pointer;
.mennu-mine
    border: none!important;
.el-aside
    width 200px!important;
    height 100%;
    font-weight: bolder;
    background-color #4D7175;
    > .el-menu
        border-right: none!important;
.el-sidebox > li
    text-align left!important;
    padding-left 30px!important;
.el-submenu > div
    padding 0!important;
.el-submenu > div .el-icon-arrow-down {
    right: 60px!important;
}
.el-sidebox i
    color: #E0F0F0!important;
.menuminebox .el-icon-arrow-down {
    color: #7DBFBB!important;
}
.menuminebox i 
    color #7DBFBB!important;
    font-weight: bolder;
.menuitems
    font-size: 12px!important;
.el-main
    background-color: #F5F7F9;
    box-sizing:border-box;
    padding 20px;
.indexContent
    width 100%;
    height 100%;
    background-color: #fff;
    overflow hidden;
</style>
