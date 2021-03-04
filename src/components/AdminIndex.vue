<template>
    <el-container>
      <!-- 页面顶部 -->
        <el-header>
            <div class="index-title" @click="goIndex">ClubHouse后台管理系统</div>
            <el-menu class="mennu-mine" :router="true" mode="horizontal" background-color="#409EFF" text-color="#fff">
                <el-submenu index="1" class="menuminebox">
                    <template slot="title"><i class="el-icon-user"></i></template>
                    <el-menu-item index="1-1">郝玉龙</el-menu-item>
                    <el-menu-item index="1-2">退出登录</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-header>
        <el-container>
        <!-- 页面左侧菜单 -->
            <el-aside width="200px" style="background-color: rgba(238,241,246)">
              <el-menu :router="true" :unique-opened="true">
                <!-- 开启菜单中的Router=true后 点击菜单会把index作为路由跳转路径 systemConfig-->
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
              <h3 v-if="routerChange">欢迎来到ClubHouse</h3>
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
    watch:{
        $route:{
            handler(val,oldval){
                if(val && val.name == "AdminIndex"){
                    this.routerChange = true;
                }else{
                    this.routerChange = false;
                }
                // if()
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
        }
    },
}
</script>
<style lang="stylus">
.el-header {
    background-color: #409EFF;
    color: #fff;
    line-height: 60px;
    display flex;
    justify-content space-between;
    align-items center;
}
.index-title
    display inline-block;
    cursor: pointer;
.mennu-mine
    border: none;
.el-icon-user
    color: #fff;
.el-aside
    color: #333;
    background-color #fff!important;
    > .el-menu
        border-right: none!important;;
.menuminebox .el-icon-arrow-down {
    color: #fff!important;
}
.menuminebox i 
    color #fff!important;
.menuitems
    font-size: 12px!important;

</style>
