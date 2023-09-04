<template>
  <div>
    <div class="banner">产品服务</div>
    <div style="margin: 65px;">
      <a-tabs v-model:activeKey="currentKey">
        <a-tab-pane v-for="(item,index) in productList" :key="item.value" :tab="item.title">
          <productItem :currentItem="item"/>
        </a-tab-pane>
    </a-tabs>
    </div>
  </div>
</template>

<script name="energyMeter" setup>
import { ref, onMounted ,defineComponent, reactive} from 'vue'
import { useRouter } from 'vue-router'
import { productList ,currentKey} from "@/assets/js/allProductList.js";
import productItem from "./productItem.vue";
onMounted(() => {

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
.centerContent{
  display: flex;
  margin: 0 50px;
  justify-content: space-evenly;
  gap: 10px;
}
.itemContent{
  height: 473px;
  width: 450px;
  background-color: #ebeef3;
}
.titleContent{
  font-size: 20px;
  width: 170px;
  color: #232323;
  width: 100%;
  text-align: center;
  margin-top: 40px;
}
.buttonContent{
  display: block;
  margin: 15px auto 0;
  border: 1px solid #adadad;
  border-radius: 5px;
  background-color: #fff;
} 
.imgContent{
  width: 310px;
  height: 340px;
  margin: auto;
}
</style>
