<template>
  <div>
    <div class="banner">产品服务</div>
    <div class="productBox">
      <div>
        <a-divider orientation="center">
          <span style="font-weight: bold;font-size: 30px;line-height: 48px;">超声水表产品</span>
        </a-divider>
      </div>
      <div class="centerContent">
        <div class="itemContent"
          v-for="item in contentData"
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

<script name="energyMeter">
import { ref, onMounted ,defineComponent, reactive} from 'vue'
import { useRouter } from 'vue-router'
import DN15_DN40 from "@/assets/img//054A7680.png";
import DN50_DN500 from "@/assets/img/054A7545.png";
import DN_WIFI from "@/assets/img/054A7545.png";
export default defineComponent({
  setup() {
    const router = useRouter()
    const contentData = reactive([
      {
        title: '用户超声波水表（DN15-DN40）',
        img: DN15_DN40,
        id:'DN15_DN40',
      },
      {
        title: '大口径超声波水表（DN50-DN500）',
        img: DN50_DN500,
        id:'DN50_DN500',
      },
      {
        title: '无线超声波水表',
        img: DN_WIFI,
        id:'DN_WIFI',
      }
    ])
    const routerPush = (item) => { 
      router.push(`/productDetail?id=${item.id}`)
    }
    onMounted(() => {

    })
    return {
      contentData,
      routerPush,
    }
  },
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
