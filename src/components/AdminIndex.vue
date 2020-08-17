<template>
    <el-container>
      <!-- 页面顶部 -->
        <el-header>
            LOGO
        </el-header>
        <el-container>
        <!-- 页面左侧菜单 -->
            <el-aside width="200px" style="background-color: rgba(238,241,246)">
              <el-menu :router="true">
                <!-- 开启菜单中的Router=true后 点击菜单会把index作为路由跳转路径-->
                <el-submenu>
                   <el-menu-item index="/admin/product">
                     <i class="el-icon-setting"></i>产品管理
                   </el-menu-item>
                   <el-menu-item index="/admin/client">
                     <i class="el-icon-setting"></i>客户管理
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
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    name: 'AdminIndex'
}
</script>
<style>
  .el-header {
    background-color: #c1cbd8;
    color: #333;
    line-height: 60px;
  }
  .el-aside{
    color: #333;
  }
</style>
