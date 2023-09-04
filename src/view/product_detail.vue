<template>
  <div>
    <div class="banner">产品服务</div>
    <div class="productBox">
      <div>
        <a-divider orientation="left">
          <a-breadcrumb separator=">"  style="line-height: 48px">
            <a-breadcrumb-item>超声水表</a-breadcrumb-item>
            <a-breadcrumb-item>{{ detailsData.title }}</a-breadcrumb-item>
          </a-breadcrumb>
        </a-divider>
      </div>
      <div class="centerDetail">
        <div  style="height: 100%;width:40%;display: flex;position: relative;">
          <a-carousel autoplay style="height: 100%;width:100%;">
            <div v-for="(item,index) in detailsData.imgList" :key="detailsData.id+'_'+index" @click="selectImg(item)">
              <img :src="item"  style="height: 100%;width:100%;">
            </div>
          </a-carousel>
          <!-- <div class="detailsImgList">
            <div v-for="(item,index) in detailsData.imgList" :key="detailsData.id+'_'+index" @click="selectImg(item)">
              <img :src="item" >
            </div>
          </div>
          <div>
            <img :src="currentImg"  style="height: 100%;width: 100%;">
          </div> -->
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
          <component :is="detailsData.id"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script name="energyMeter">
import { ref, onMounted ,defineComponent, reactive} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { StarTwoTone } from '@ant-design/icons-vue';

import DN15_DN40 from "./table/DN15_DN40.vue";
import DN50_DN500 from "./table/DN50_DN500.vue";
import DN_WIFI from "./table/DN_WIFI.vue";


import DN15_DN40_054A7680 from "@/assets/img/054A7680.png";
import DN50_DN500_IMG from "@/assets/img/054A7545.png";
import DN_WIFI_IMG from "@/assets/img/054A7545.png";

export default defineComponent({
  components: {
    DN15_DN40,
    DN50_DN500,
    DN_WIFI,
    StarTwoTone
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    let detailsData = ref({})
    const currentImg = ref('')
    const contentData = reactive([
      {
        title: '用户超声波水表（DN15-DN40）',
        imgList: [DN15_DN40_054A7680],//,DN15_DN40_054A7670,DN15_DN40_054A7664
        id: 'DN15_DN40',
        descrription:'超声波水表采用时差法超声波计量技术具有低使动流量、高量程比特点，适用于户用和工业计量;无转动部件，抗异物能力强:采用超低功耗技术，寿命大于等于10年，易于更换电池。',
        listConyent: [
          '优异性能:量程比Q3:Q1=250，使动流量3L/h(DN15)，精度等级2级',
          '超长电池寿命:超低待机功耗，内置ER26500锂电池，易于更换电池',
          '精准故障检测:无水提示、逆流报警、欠压提示及其他硬件故障提示。',
          '丰富通信接口:红外通信、MBus总线、RS485接口（外供电9-36V，可对水表供电，满足复杂的工业应用）、TTL接口、4G通信、NB通信。',
          '防护无忧:IP68防水防尘设计，可常年浸水使用。',
          '数据可追溯:24个月累积数据存储，历史数据一目了然。',
          '数据安全:历史数据掉电保存，数据加密技术内部参数无法篡改。',
        ],
      },
      {
        title: '大口径超声波水表（DN50-DN500）',
        imgList: [DN50_DN500_IMG],
        id: 'DN50_DN500',
        descrription: '大口径超声波水表采用时差法超声波计量技术，具有低使动流量、高量程比、防护等级高特点，适用于工业计量:无转动部件，抗异物能力强，换能器抗污能力强:采用超低功耗技术，寿命大于等于10年，双电源供电设计，电池寿命10年。',
        listConyent: [
          '优异性能:量程比Q3.Q1=250，使动流量30L/h(DN50)，精度等级2级。',
          '高动态:自动调整采样频率，适用于高动态水流波动。',
          '超长电池寿命:双电源供电，超低待机功耗，内置ER26500鲤电池，易于更换电池。',
          '故障自诊断:无水提示、逆流报警、欠压提示及其他硬件故障提示。',
          '丰富通信接口:红外通信、MBus总线、RS485接口(外供电9-36V，可对水表供电，满足复杂的工业应用)、TTL接口、4G通信、NB通信。',
          '防护无忧:IP68防水防尘设计，可常年浸水使用。',
          '数据可追溯:24个月累积数据存储，历史数据一目了然。',
          '数据安全:历史数据掉电保存，数据加密技术内部参数无法篡改。',
          '多声道测量:多声道测量采用纵向排列，测量不同流层流速，精确计量。',
          '温度补偿功能:全量程流量修正曲线，确保不同温度下全流量范围的流量精度。',
          '抗干扰能力强:优秀的软硬件滤波功能，可有效解决现存电磁等干扰导致的流量不稳定问题。',
        ]
      },
      {
        title: '无线超声波水表',
        imgList: [DN_WIFI_IMG],
        id: 'DN_WIFI',
        descrription: '超声波水表采用时差法超声波计量技术，具有低使动流量、高量程比、防护等级高特点，适用于工业计量:无转动部件，抗异物能力强，换能器抗污能力强:采用超低功耗技术，寿命大于等于10年，双电源供电设计，电池寿命10年;无线传输采用网络覆盖范围广的4G网络:有效解决城郊范围的网络覆盖信号差的问题。',
        listConyent: [
          '优异性能:量程比Q3.Q1=250，使动流量3L/h(DN50)，精度等级2级',
          '高动态:自动调整采样频率，适用于高动态水流波动。',
          '超长电池寿命:双电源供电，超低待机功耗，内置ER26500理电池，易于更换电池',
          '故障自诊断:无水提示、逆流报警、欠压提示及其他硬件故障提示。',
          '防护无忧:IP68防水防尘设计，可常年浸水使用。',
          '数据可追溯:24个月累积数据存储，历史数据一目了然。',
          '数据安全:历史数据掉电保存，数据加密技术内部参数无法篡改。',
          '多声道测量:多声道测量采用纵向排列，测量不同流层流速，精确计量。',
          '温度补偿功能:全量程流量修正曲线，确保不同温度下全流量范围的流量精度。',
          '抗干扰能力强:优秀的软硬件滤波功能，可有效解决现存电磁等干扰导致的流量不稳定问题。',
          '超声波流量计采用一体式设计，计量与远传合二为一可靠性高，安装方便，维护成本低。',
          '超声波流量计采用4G通信，有效解决现场远传信号未覆盖等问题。',
          '采用计传双供电且可更换电池，远传与计量单独供电，互不干扰，优先保证流量计计量功能;表计计量与 4G 远六传分别供电，计量部分供电寿命23 年，远传部分供电寿命高达 5000 次。',
          '内置SIM卡，包含6年资费。'
        ]
      }
    ])
    const routerPush = (item) => { 
      route.push(`/productDetail?id=${item.id}`)
    }
    const findData = () => { 
      const { id } = route.query
      detailsData.value = contentData.filter(item => item.id === id)?.at(0)
      currentImg.value = detailsData.value?.imgList.at(0)
    }
    onMounted(() => {
      findData()
    })
    return {
      contentData,
      routerPush,
      detailsData,
      currentImg,
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
</style>
