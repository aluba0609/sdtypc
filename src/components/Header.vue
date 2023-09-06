<template>
  <!-- 头部整体盒子 -->
  <div id="header">
    <!-- 电脑导航 -->
    <div class="header-nav">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/logo.jpg" />
      </div>
      <a-menu v-model:selectedKeys="currentRouter" @click="routerPush" mode="horizontal" class="menuBoxClass" triggerSubMenuAction="hover">
        <a-menu-item key="index">
          <span class="menuItemClass">首页</span>
        </a-menu-item>
        <a-sub-menu>
          <template #title>
            <a-menu-item key="productList">
              <span class="menuItemClass">产品服务</span>
            </a-menu-item>
          </template>
          <div style="display: flex;width: 100vw;overflow: hidden;" @click="routerPush({key:'productList'})">
            <a-segmented v-model:value="currentKey" :options="productList" >
              <template #label="{ title }">
                <div style="padding: 4px;margin: 10px;">
                  <div>{{ title }}</div>
                </div>
              </template>
            </a-segmented>
            <!-- <a-list item-layout="inline" size="small"  :data-source="productList">
              <template #renderItem="{ item }">
                <a-list-item style="padding: 25px 10px;cursor: pointer;">{{ item.title }}</a-list-item>
              </template>
            </a-list> -->
          </div>

        </a-sub-menu>
        <a-menu-item key="solution">
          <span class="menuItemClass">典型案例</span>
        </a-menu-item>
        <a-menu-item key="introduction">
          <span class="menuItemClass">公司介绍</span>
        </a-menu-item>
        <a-menu-item key="contactus">
          <span class="menuItemClass">联系我们</span>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { productList,currentKey } from "@/assets/js/allProductList.js";
const router = useRouter()
const currentRouter = ref()
const routerPush = (e) => {
  router.push(e.key)
}
</script>

<style scoped>
/* 顶部 */
#header {
  background: #fff;
  transition: all ease 0.6s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  box-shadow: 0 0 5px 1px #999;
}

#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #fff;
}

/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}

/* 导航栏 */
#header .header-nav {
  height: 71px;
  width: 100%;
  display: flex;
  /* padding: 0 40px; */
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
}

/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
}

/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 90px;
  height: 70px;
}
.menuBoxClass{
  height: 71px;
  line-height: 70px;
}
.menuItemClass {
  color: #000;
  font-size: 16px;
  font-weight: bold;
}
:deep(.ant-list){
  width: 100%;
}
:deep(.ant-list-items){
  display: flex;
  justify-content: space-around;
}
.ant-segmented{
  width: 100%;
  background-color: #fff;
}
:deep(.ant-segmented-group){
  justify-content: space-evenly;
}
:deep(.ant-segmented-item-selected){
  color: #1677ff !important;
  text-shadow: 0 0 0.25px currentcolor !important;
}
</style>

