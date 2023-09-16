<template>
  <div>
    <div class="banner"></div>
    <div class="productBox">
      <div>
        <a-divider orientation="left">
          <a-breadcrumb separator=">"  style="line-height: 48px">
            <a-breadcrumb-item @click="routerPush">{{ productTitle }}</a-breadcrumb-item>
            <a-breadcrumb-item>{{ detailsData.title }}</a-breadcrumb-item>
          </a-breadcrumb>
        </a-divider>
      </div>
      <div class="centerDetail">
        <div  style="height: 100%;width:40%;display: flex;position: relative;">
          <a-carousel autoplay style="height: 100%;width:100%;">
            <div v-for="(item,index) in detailsData.imgList" :key="detailsData.id+'_'+index">
              <img :src="item"  style="height: 100%;width:100%;">
            </div>
          </a-carousel>
        </div>
        <div style="height: 100%;width:60%;padding-left: 10px;">
          <div style="text-align: center;font-size: 24px;padding-top: 16px;">{{detailsData.title}}</div>
          <a-divider orientation="left">
            <span style="font-weight: bold;font-size: 23px;line-height: 48px;color: #c7161d;">产品概述</span>
          </a-divider>
          <div style="text-indent: 2em;">{{detailsData.descrription}}</div>
          <a-divider orientation="left">
            <span style="font-weight: bold;font-size: 23px;line-height: 48px;color: #c7161d;">产品特点</span>
          </a-divider>
          <a-list size="large" :data-source="detailsData.listConyent"  style="height: 100%;width:100%;">
            <template #renderItem="{ item }">
              <a-list-item>
                <star-two-tone />
                {{ item }}
              </a-list-item>
            </template>
          </a-list>
        </div>
      </div>
      <div>
        <a-divider orientation="center">
          <span style="font-weight: bold;font-size: 30px;line-height: 48px;color: #c7161d;">技术参数</span>
        </a-divider>
        <div>
          <component :is="currentCopmonent"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="product_detail">
import { ref, onMounted ,defineAsyncComponent, reactive,watch,shallowRef} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { StarTwoTone } from '@ant-design/icons-vue';
import { productList,contentDetailData,currentKey } from "@/assets/js/allProductList.js";

const router = useRouter()
const route = useRoute()
let detailsData = ref({})
let productTitle = ref('')
let currentCopmonent = shallowRef()
const routerPush = () => { 
  router.push(`productList`)
}
const findData = () => { 
  const { id } = route.query
  productTitle.value =  productList.filter(item => item.value === currentKey.value)?.at(0).title
  detailsData.value = contentDetailData.filter(item => item.id === id)?.at(0)
}
watch(() => detailsData.value, () => { 
  currentCopmonent.value = defineAsyncComponent(() => import(`./table/${detailsData.value.component}.vue`));
})
onMounted(() => {
  findData()
})
</script>

<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/bannerWater.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  text-align: center;
}
.productBox{
  margin: 30px 0;
}
.detailsImgList{
  display: flex;
  flex-direction: row;
  width: 100%;
  /* background-color: #eef3f7; */
  position: absolute;
  bottom: 0;
}
.detailsImgList img{
  width: 100px;
  height: 150px;
  margin: auto;
}
.centerDetail{
  display: flex;
  padding: 0 50px;
  background-color: #e7eef6;
}
:deep(.ant-list-lg .ant-list-item) {
  padding: 5px 0;
}
:deep(.ant-breadcrumb ol){
  flex-wrap: nowrap;
}
</style>
