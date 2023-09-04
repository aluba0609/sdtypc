<template>
    <a-table :columns="columns" :data-source="data" bordered :pagination="false">
    </a-table>
</template>
<script setup name="DN15_DN40">
import { ref, onMounted, defineComponent, reactive } from 'vue'
const columns = [
    {
        title: '公称直径DN(MM)',
        dataIndex: 'name',
        align:'center',
    },
    {
        title: 'DN15',
        dataIndex: 'DN15',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 5,
        }),
        align:'center',
    },
    {
        title: 'DN20',
        dataIndex: 'DN20',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN25',
        dataIndex: 'DN25',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN32',
        dataIndex: 'DN32',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
    {
        title: 'DN40',
        dataIndex: 'DN40',
        customCell: (_, index) => ({
            colSpan: index < 4 ? 1 : 0,
            rowSpan: index < 4 ? 1 : 0,
        }),
        align:'center',
    },
]
const data = [
    {
        name: '最大流量Q4(m²/h)',
        DN15: 3.125,
        DN20: 5,
        DN25: 7.875,
        DN32: 12.5,
        DN40: 20,
    },
    {
        name: '常用流量Q4(m²/h)',
        DN15: 2.5,
        DN20: 4,
        DN25: 6.3,
        DN32: 10,
        DN40: 16,
    },
    {
        name: '临街流量Q4(m²/h)',
        DN15: 0.016,
        DN20: 0.026,
        DN25: 0.04,
        DN32: 0.064,
        DN40: 0.102,
    },
    {
        name: '最小流量Q4(m²/h)',
        DN15: 0.1,
        DN20: 0.016,
        DN25: 0.025,
        DN32: 0.04,
        DN40: 0.064,
    },
    {
        name: '量程比(Q3/Q1)',
        DN15: 250/160,
    },
    {
        name: '压力损失(kPa/qp)',
        DN15: '<25',
    },
    {
        name: '准确度',
        DN15: '2级',
    },
    {
        name: '最大工作压力',
        DN15: '1.6MPa(2.5Mpa可定制)',
    },
    {
        name: '防护等级',
        DN15: 'IP68',
    },
    {
        name: '温度等级',
        DN15: 'T50',
    },
    {
        name: '环境类别',
        DN15: 'A类{5~55}℃或B类{-25~55}℃或D类可选',
    },
    {
        name: '供电电源',
        DN15: '3.6V锂电池(RS485可外供电.9-24DVC)',
    },
    {
        name: '电池工作时间',
        DN15: '≥10',
    },
    {
        name: '安装方式',
        DN15: '水平或者垂直',
    },
]
</script>