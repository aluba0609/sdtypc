<template>
    <div >
      <div class="banner"></div>
      <div>
        <div>
        </div>
        <div style="background: #ececec; padding: 30px">
            <a-card title="鹏诚智慧水务系统平台" :bordered="false" style="width: 100%">
                <p class="textIndent">鹏诚智慧水务管理平台是以物联感知技术、大数据、智能控制、云计算、人工智能、数字孪生、AI算法、虚拟现实技术为核心，以监测仪表、通讯网络、数据库系统、数据中台、模型软件、前台展示、智慧运维等产品体系为支撑，以城市水资源、水生态、水环境和水安全提升和建造智能化为目标的智慧水务体系。</p>
                <p class="textIndent">鹏诚智慧水务总体架构：采用1+2+3+N+X 架构设计，建立1个智慧大脑、2个体系、3个平台，N个基础数据及管理层级矩阵及X跨部门跨层级数据互联互通的系统架构。</p>
                <p class="textIndent" style="text-align: center;font-size: 16px;">核心应用系统：</p>
                <div style="display: flex;flex-wrap: wrap;gap: 10px;width: 100%;justify-content: space-evenly;" >
                    <template  v-for="item in systemInfo">
                        <div style="width: calc(33% - 20px);min-width: 450px;">
                            <a-card 
                                :title="item.title"
                                :bordered="true" 
                                :headStyle="{
                                    textAlign:'center'
                                }"
                                :bodyStyle="{
                                    height:'170px',
                                    padding:'10px'
                                }"
                            >
                                <p class="systemClass" v-for="el in item.list">{{el}}</p>
                
                            </a-card>
                        </div>
                    </template>
                </div>
            </a-card>
        </div>
      </div>
    </div>
</template>
<script setup name="ContactUs">
import { onMounted, reactive,defineComponent,ref } from 'vue'

const data = reactive([
    '鹏诚智慧水务系统平台',
    '鹏诚物联网供水计量系统',
    '鹏诚供水DMA分区计量系统',
    '鹏诚管网SCADA和GIS系统',
    '鹏诚供水营业收费系统',
    '鹏诚智慧供热系统平台',
    '鹏诚物联网供热计量系统',
    '鹏诚供热DMA分区计量系统',
    '鹏诚供热管网SCADA和GIS系统',
    '鹏诚水资源管理信息系统平台',
]);
const systemInfo = reactive([
    {
        title: '综合指挥调度',
        list: [
        '数据可视化驾驶舱',
        '打破数据壁垒，数据集中展示',
        '全面掌控系统运行状况',
        '全面展示运营管理关键指标',
        '异常关键指标预警及挖掘分析',
        ]
    },
    {
        title: '水厂运行管理系统',
        list: [
        '水厂调度一张图，生产过程全把控',
        '工艺流程透明化，重要环节可视化',
        '异常问题早发现，突发状况早处理',
        '辅助调度体生产，能耗优先降成本',
        ]
    },
    {
        title: '二次泵房管理系统',
        list: [
        '工艺流程3D可视化，运行状态一目了然',
        '泵站运行能耗分析，节能降耗提效率',
        '设备自动远程控制，无人值守降成本',
        '异常状态自动报警，及时响应降损失',
        ]
    },
    {
        title: '供水管网SCADA监测和GIS管理系统',
        list: [
        '管网GIS，精准定位个监测点信息',
        '实时监测管网流量、压力等关键数据',
        '分区计量，漏损分析降低产销差',
        '超限报警，异常早发现',
        ]
    },
    {
        title: '营业收费系统',
        list: [
        '扩展型强，预留多种对接接口',
        '兼容性强，对接多种抄表系统',
        '便捷缴费，微信支付宝等多种途径',
        '及时报修，微信公众号自主下单',
        '报表多样，多层面多维度分析',
        ]
    },
    {
        title: '客服管理系统',
        list: [
        '多种报修下单途径',
        '维修订单一键指派',
        '客户服务闭环管理',
        '订单全流程可追踪',
        ]
    },
    
])
const value = ref(data[0]); 
</script>
  
  <style scoped>
  .banner {
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url('../assets/img/banner_2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
    text-align: center;
  }
  .textIndent{
    text-indent: 2em;
    padding: 10px 0;
  }
  .systemClass{
    font-weight: bold;
    text-align: center;
    padding: 3px 0;
  }
  </style>
  
  