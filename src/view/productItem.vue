<template>
  <div>
    <div class="productBox">
      <div class="centerContent">
        <div class="itemContent"
          v-for="item in currentContent"
          :key="item.id"
        >
          <div class="titleContent">{{ item.title }}</div>
          <a-button class="buttonContent" @click="routerPush(item)">了解详情</a-button>
          <img :src="item.img" alt="" class="imgContent">
        </div>
      </div>
    </div>
  </div>
</template>

<script name="energyMeter" setup>
import { ref, onMounted ,defineComponent, reactive,defineProps,computed} from 'vue'
import { useRouter } from 'vue-router'
import {contentData} from "@/assets/js/allProductList.js";
import DN15_DN40 from "@/assets/img/054A7680.png";
import DN50_DN500 from "@/assets/img/054A7545.png";
import DN_WIFI from "@/assets/img/054A7545.png";

const {currentItem} = defineProps({
  currentItem:Object,
})
const router = useRouter()
const currentContent = computed(()=>contentData[currentItem.value])
const routerPush = (item) => { 
  if(!item.id)return
  router.push(`/productDetail?id=${item.id}`)
}
onMounted(() => {

})

</script>

<style scoped>

.productBox{
  margin: 30px 0;
}
.centerContent{
  display: flex;
  justify-content: flex-start;
  gap: 28px;
  flex-wrap: wrap;
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
