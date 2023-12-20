<script setup lang="ts">
import {Menu as IconMenu, Message, Setting, HomeFilled} from "@element-plus/icons-vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();


</script>

<template>
<!--  <el-container class="layout-container-demo" style="height: 98vh">-->
<!--    &lt;!&ndash;菜单栏&ndash;&gt;-->
<!--    <el-aside width="200px">-->
<!--      <el-scrollbar>-->
<!--        &lt;!&ndash; router:是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。 &ndash;&gt;-->
<!--        &lt;!&ndash; default-active:页面加载时默认激活菜单的 index 也就是你当前选中的菜单页进行高亮显示 &ndash;&gt;-->
<!--        <el-menu :router="true" :default-active="route.fullPath">-->
<!--          &lt;!&ndash; 这个index是一个唯一标识：一般我们将它设置为路由的地址即可 &ndash;&gt;-->
<!--          <el-menu-item index="/home">-->
<!--            <el-icon>-->
<!--              <HomeFilled/>-->
<!--            </el-icon>-->
<!--            <span>首页</span>-->
<!--          </el-menu-item>-->
<!--          <el-sub-menu index="/news">-->
<!--            <template #title>-->
<!--              <el-icon>-->
<!--                <icon-menu/>-->
<!--              </el-icon>-->
<!--              新闻管理-->
<!--            </template>-->
<!--            <el-menu-item index="/news/add">新增新闻</el-menu-item>-->
<!--            <el-menu-item index="/news/list">新闻列表</el-menu-item>-->
<!--          </el-sub-menu>-->
<!--        </el-menu>-->
<!--      </el-scrollbar>-->
<!--    </el-aside>-->
<!--  </el-container>-->

<!--  &lt;!&ndash; 内容栏 &ndash;&gt;-->
<!--  <el-container>-->
<!--    <el-header style="text-align: right;font-size:12px">-->
<!--      <div>新闻管理系统</div>-->
<!--      <div>欢迎回来</div>-->
<!--    </el-header>-->
<!--    <el-main>-->
<!--      <el-scrollbar>-->
<!--        &lt;!&ndash; 这里就是我们的路由容器：我们的数据加载到这里 &ndash;&gt;-->
<!--        <RouterView></RouterView>-->
<!--      </el-scrollbar>-->
<!--    </el-main>-->
<!--  </el-container>-->
</template>


<style>
* {
  margin: 0;
  padding: 0;
}

.el-header {
  background: #f5f7fa;
  height: 80px;
  width: 100%;
  line-height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  /*字体垂直方向居中*/
}

.el-header div {
  font-size: 16px;
}
</style>
