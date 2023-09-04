import { ref, onMounted ,defineComponent, reactive,defineProps} from 'vue'

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
export let currentKey = ref('')
export const productList = [
    {
        title: '供排水领域系列',
        value:'product_one',
    },
    {
        title:'供热制冷系列',
        value: 'product_two',
    },
    {
        title:'工业领域应用系列',
        value: 'product_three',
    },
    {
        title:'水利行业领域系列',
        value: 'product_four',
    },
    {
        title:'电磁流量计系列',
        value: 'product_five',
    },
    {
        title:'电磁水表系列',
        value: 'product_six',
    },
    {
        title:'明渠流量计系列',
        value: 'product_seven',
    },
    {
        title:'非满管电磁流量计',
        value: 'product_eight',
    },
    {
        title:'闸控一体化全渠宽明渠流量计',
        value: 'product_nine',
    },
]
export const contentData = reactive({
    product_one:[
        {
            title: '超声水表（小管径应用于户表系列）',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '超声水表（大管径应用于大管径取水户系列）',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '单声道管道式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '多声道管道式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '插入式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '外夹式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '便携式超声流量计',
            img: A0547545,
            id:'A0547545',
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
            id:'A0547609',
        },
        {
            title: '管段式超声热量表',
            img: A0547609,
            id:'A0547609',
        },
        {
            title: '智能温控阀',
            img: "",
            id:'',
        },
        {
            title: '室温采集器',
            img: "",
            id:'',
        },
        {
            title: '数据采集器',
            img: "",
            id:'',
        },
    ],
    product_three: [
        {
            title: '超声水表',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '管道式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '插入式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '外夹式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '便携式超声流量计',
            img: A0547545,
            id:'A0547545',
        },
        {
            title: '数据采集器',
            img: "",
            id:'',
        },
        {
            title: '防爆/隔爆型的流量计',
            img: A0547545,
            id:'A0547545',
        },
    ],
    product_four: [
        {
            title: '超声水表',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '超声波明渠流量计',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '管道式超声流量计',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '插入式超声流量计',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '外夹式超声流量计',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '便携式超声流量计',
            img: A0547680,
            id:'A0547680',
        },
        {
            title: '遥测终端机',
            img: "",
            id:'',
        },
    ],
    product_five: [
        {
            title: '管道式电磁流量计',
            img: "",
            id:'',
        },
        {
            title: '插入式电磁流量计',
            img: "",
            id:'',
        },
    ],
    product_six: [
        {
            title: '电磁水表',
            img: "",
            id:'',
        },
    ],
    product_seven: [
        {
            title: '全渠宽箱式电磁明渠流量计',
            img: "",
            id:'',
        },
        {
            title: '智能化明渠流量测量系统',
            img: "",
            id:'',
        },
    ],
    product_eight: [
        {
            title: '非满管电磁流量计',
            img: "",
            id:'',
        },
    ],
    product_nine: [
        {
            title: '闸控一体化全渠宽明渠流量计',
            img: A0547545,
            id:'A0547545',
        },
    ],
})