<!--导航菜单-->
<aside :class="'menu-expanded'">
  　<el-menu :default-active="$route.path" ref="bigmenu" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" unique-opened router>
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden && checkContains(item.name)">
           <el-submenu :index="index+''" v-if="!item.single">
             <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
             <el-menu-item v-for="child in item.children" @click="addRouter(child, item.path +'/'+ child.path)" :index="item.path +'/'+ child.path" :key="item.path +'/'+ child.path" v-if="!child.hidden && checkContains(child.name)">{{child.name}}</el-menu-item>
           </el-submenu>
           <router-link v-else v-for="child in item.children" :index="child.path" :key="child.path" :to="child.path">
              <div @click="addRouter(child)" class="single-menu">{{child.name}}</div>
           </router-link>
         </template>
    </el-menu>
 </aside>

<script>
</script>

<style>
</style>
