import { ref, onMounted, defineComponent, reactive, defineProps } from 'vue'

import A0547680 from "@/assets/img/origin/DN15-DN40/A0547680.png";
import A0547650 from "@/assets/img/origin/DN20/A0547650.png";
// import afb9339 from "@/assets/img/origin/DN25/afb9339.png";
import A0547609 from "@/assets/img/origin/DN50-DN300/A0547609.png";
import A0547545 from "@/assets/img/origin/L-DN50-DN300/A0547545.png";
import A0547587 from "@/assets/img/origin/N-DN50-DN300/A0547587.png";

/**
 * 超声波水表DN15-DN40
 * 超声波冷热能表DN20
 * 超声波水表DN25
 * 超声波冷热量表DN50-DN300
 * 超声波流量计L-DN50-DN300
 * 超声波能量计N-DN50-DN300
 */
export let currentKey = ref('product_one')
export const productList = [
    {
        title: '供排水领域系列',
        value: 'product_one',
    },
    {
        title: '供热制冷系列',
        value: 'product_two',
    },
    {
        title: '工业领域应用系列',
        value: 'product_three',
    },
    {
        title: '水利行业领域系列',
        value: 'product_four',
    },
    {
        title: '电磁流量计系列',
        value: 'product_five',
    },
    {
        title: '电磁水表系列',
        value: 'product_six',
    },
    {
        title: '明渠流量计系列',
        value: 'product_seven',
    },
    {
        title: '非满管电磁流量计',
        value: 'product_eight',
    },
    {
        title: '闸控一体化全渠宽明渠流量计',
        value: 'product_nine',
    },
]
export const contentData = reactive({
    product_one: [
        {
            title: '超声水表（小管径应用于户表系列）',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '超声水表（大管径应用于大管径取水户系列）',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '单声道管道式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '多声道管道式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '插入式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '外夹式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '便携式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        // {
        //     title: '用户超声波水表（DN15-DN40）',
        //     img: DN15_DN40,
        //     id:'DN15_DN40',
        // },
        // {
        //     title: '大口径超声波水表（DN50-DN500）',
        //     img: DN50_DN500,
        //     id:'DN50_DN500',
        // },
        // {
        //     title: '无线超声波水表',
        //     img: DN_WIFI,
        //     id:'DN_WIFI',
        // }
    ],
    product_two: [
        {
            title: '超声热量表（小管径应用于户表系列）',
            img: A0547609,
            id: 'A0547609',
        },
        {
            title: '管段式超声热量表',
            img: A0547609,
            id: 'A0547609',
        },
        {
            title: '智能温控阀',
            img: "",
            id: '',
        },
        {
            title: '室温采集器',
            img: "",
            id: '',
        },
        {
            title: '数据采集器',
            img: "",
            id: '',
        },
    ],
    product_three: [
        {
            title: '超声水表',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '管道式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '插入式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '外夹式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '便携式超声流量计',
            img: A0547545,
            id: 'A0547545',
        },
        {
            title: '数据采集器',
            img: "",
            id: '',
        },
        {
            title: '防爆/隔爆型的流量计',
            img: A0547545,
            id: 'A0547545',
        },
    ],
    product_four: [
        {
            title: '超声水表',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '超声波明渠流量计',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '管道式超声流量计',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '插入式超声流量计',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '外夹式超声流量计',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '便携式超声流量计',
            img: A0547680,
            id: 'A0547680',
        },
        {
            title: '遥测终端机',
            img: "",
            id: '',
        },
    ],
    product_five: [
        {
            title: '管道式电磁流量计',
            img: "",
            id: '',
        },
        {
            title: '插入式电磁流量计',
            img: "",
            id: '',
        },
    ],
    product_six: [
        {
            title: '电磁水表',
            img: "",
            id: '',
        },
    ],
    product_seven: [
        {
            title: '全渠宽箱式电磁明渠流量计',
            img: "",
            id: '',
        },
        {
            title: '智能化明渠流量测量系统',
            img: "",
            id: '',
        },
    ],
    product_eight: [
        {
            title: '非满管电磁流量计',
            img: "",
            id: '',
        },
    ],
    product_nine: [
        {
            title: '闸控一体化全渠宽明渠流量计',
            img: A0547545,
            id: 'A0547545',
        },
    ],
})
export const contentDetailData = reactive([
    {
        title: '用户超声波水表（DN15-DN40）',
        imgList: [A0547680],
        id: 'A0547680',
        descrription: '超声波水表采用时差法超声波计量技术具有低使动流量、高量程比特点，适用于户用和工业计量;无转动部件，抗异物能力强:采用超低功耗技术，寿命大于等于10年，易于更换电池。',
        listConyent: [
            '优异性能:量程比Q3:Q1=250，使动流量3L/h(DN15)，精度等级2级',
            '超长电池寿命:超低待机功耗，内置ER26500锂电池，易于更换电池',
            '精准故障检测:无水提示、逆流报警、欠压提示及其他硬件故障提示。',
            '丰富通信接口:红外通信、MBus总线、RS485接口（外供电9-36V，可对水表供电，满足复杂的工业应用）、TTL接口、4G通信、NB通信。',
            '防护无忧:IP68防水防尘设计，可常年浸水使用。',
            '数据可追溯:24个月累积数据存储，历史数据一目了然。',
            '数据安全:历史数据掉电保存，数据加密技术内部参数无法篡改。',
        ],
        component: 'DN15_DN40',
    },
    {
        title: '大口径超声波水表（DN50-DN500）',
        imgList: [A0547680],
        id: 'A0547680',
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
        ],
        component: 'DN50_DN500',
    },
    {
        title: '无线超声波水表',
        imgList: [A0547680],
        id: 'A0547680',
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
        ],
        component: 'DN_WIFI',
    },
    {
        title: '便携式超声波流量计',
        imgList: [],
        id: '',
        descrription: '产品适用水、海水、污水、空调水、冷却水、热水、酒精、各种油类如柴油、色拉油等轻质油等',
        listConyent: [
            '便携式超声波流量计/热量表，适用于各种工业现场中液体流量/热量的在线标定和巡检测量。',
            '具有操作简单、测量精度高、一致性好。',
            '可在线打印、电池供电时间长、可实现热量测量等特点，被广泛应用于石油化工、冶金、电力、自来水、水利、能源监测等行业。',
            '测量精度：优于1%； 重 复 性：优于0.2%。',
            '工作电源：220VAC (标配)，110VAC（可选）。',
            '测量周期：500ms(每秒2次，每个周期采集128组数据)。',
            '电  池：内置镍氢充电电池，可连续工作24小时。',
            '安装方式：外敷式安装，操作简单，方便。',
            '显  示：2行汉字同屏显示（瞬时流量、累积流量、信号状态等）。',
            '信号输出：隔离RS485。',
            '通讯协议：MODBUS协议，FUJI扩展协议，并兼容国内其它厂家同类产品的通讯协议。',
            '打印输出：内置热敏一体式打印机，实现实时或定时打印',
            '热量功能：PT100外夹式铂电阻(选配)',
            '其它功能：自诊断，提示当前工作状态是否正常',
        ],
        component: '',
    },
])